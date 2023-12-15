
export function blogText(inputStrings) {
    if (!inputStrings) return [];
    if (typeof inputStrings === 'string') {
        inputStrings = [inputStrings];
    }
    const formattedStrings = [];
    for (let i = 0; i < inputStrings.length; i++) {
        let formattedString = inputStrings[i];
        if (formattedString.includes('BULLET:')) {
            formattedString = formattedString.replace(/BULLET:/g, '•');
        }

        if (formattedString.startsWith('NOFORMAT:')) {
            formattedString = formattedString.replace('NOFORMAT:', '');
        } else {
            formattedString = formattedString
                .replace(/LINK: \[([^\]]+)\]\(([^)]+)\)/g, function (match, text, url) {
                    // Check if the URL starts with a protocol
                    const hasProtocol = /^(https?|ftp):\/\//i.test(url);

                    // Check if the URL starts with a slash
                    const isRelativePath = url.startsWith('/');

                    // If no protocol is present and it's not a relative path, assume it's an external link and add "http://" as a default
                    const fullUrl = (hasProtocol || isRelativePath) ? url : `http://${url}`;

                    // Create the anchor tag with the appropriate attributes
                    const targetAttribute = isRelativePath ? '' : 'target="_blank" rel="noopener noreferrer"';
                    return `<a href="${fullUrl}" style="color:#0070f3; text-decoration: underline" ${targetAttribute}>${text}</a>`;
                })
                .replace(/(\*\*)(.*?)\1/g, '<span style="font-weight: 600">$2</span>') // Bold: **text**
                .replace(/(__)(.*?)\1/g, '<u>$2</u>') // Underline: __text__
                .replace(/TAB:/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); // Tab: TAB: -> &nbsp;&nbsp;&nbsp;&nbsp;
        }

        formattedStrings.push(formattedString);
    }
    return formattedStrings;
}