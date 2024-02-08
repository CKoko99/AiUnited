import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const TEXT = {
    industry: { en: "Industry", es: "Industria" },
    occupation: { en: "Occupation", es: "Ocupación" },
}


const WorkSelectOptions = [
    {
        text: {
            en: "Agriculture/Forestry/Fishing",
            es: "Agricultura / Silvicultura / Pesca",
        },
        value: "Agriculture/Forestry/Fishing",
        Occupations: [
            {
                text: {
                    en: "Agriculture Inspector/Grader",
                    es: "Inspector / Clasificador de Agricultura",
                },
                value: "Agriculture Inspector/Grader",
            },
            {
                text: {
                    en: "Arborist",
                    es: "Arborista",
                },
                value: "Arborist",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Equipment Operator",
                    es: "Operador de equipo",
                },
                value: "Equipment Operator",
            },
            {
                text: {
                    en: "Farm/Ranch Owner",
                    es: "Propietario de granja / rancho",
                },
                value: "Farm/Ranch Owner",
            },
            {
                text: {
                    en: "Farm/Ranch Worker",
                    es: "Trabajador de granja / rancho",
                },
                value: "Farm/Ranch Worker",
            },
            {
                text: {
                    en: "Fisherman",
                    es: "Pescador",
                },
                value: "Fisherman",
            },
            {
                text: {
                    en: "Florist",
                    es: "Florista",
                },
                value: "Florist",
            },
            {
                text: {
                    en: "Laborer/Worker",
                    es: "Obrero / Trabajador",
                },
                value: "Laborer/Worker",
            },
            {
                text: {
                    en: "Landscaper",
                    es: "Paisajista",
                },
                value: "Landscaper",
            },
            {
                text: {
                    en: "Landscaping/Nursery Worker",
                    es: "Trabajador de jardinería / vivero",
                },
                value: "Landscaping/Nursery Worker",
            },
            {
                text: {
                    en: "Logger",
                    es: "Leñador",
                },
                value: "Logger",
            },
            {
                text: {
                    en: "Mill Worker",
                    es: "Trabajador de molino",
                },
                value: "Mill Worker",
            },
            {
                text: {
                    en: "Ranger",
                    es: "Ranger",
                },
                value: "Ranger",
            },
            {
                text: {
                    en: "Supervisor",
                    es: "Supervisor",
                },
                value: "Supervisor",
            },
            {
                text: {
                    en: "Timber Grader/Scaler",
                    es: "Clasificador / Escalador de madera",
                },
                value: "Timber Grader/Scaler",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Art/Design/Media",
            es: "Arte / Diseño / Medios",
        },
        value: "Art/Design/Media",

        Occupations: [
            {
                text: {
                    en: "Actor",
                    es: "Actor",
                },
                value: "Actor",
            },
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Announcer/Broadcaster",
                    es: "Locutor / Locutor",
                },
                value: "Announcer/Broadcaster",
            },
            {
                text: {
                    en: "Artist/Animator",
                    es: "Artista / Animador",
                },
                value: "Artist/Animator",
            },
            {
                text: {
                    en: "Author/Writer",
                    es: "Autor / Escritor",
                },
                value: "Author/Writer",
            },
            {
                text: {
                    en: "Choreography/Dancer",
                    es: "Coreografía / Bailarín",
                },
                value: "Choreography/Dancer",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Composer/Director",
                    es: "Compositor / Director",
                },
                value: "Composer/Director",
            },
            {
                text: {
                    en: "Curator",
                    es: "Curador",
                },
                value: "Curator",
            },
            {
                text: {
                    en: "Designer",
                    es: "Diseñador",
                },
                value: "Designer",
            },
            {
                text: {
                    en: "Editor",
                    es: "Editor",
                },
                value: "Editor",
            },
            {
                text: {
                    en: "Journalist/Reporter",
                    es: "Periodista / Reportero",
                },
                value: "Journalist/Reporter",
            },
            {
                text: {
                    en: "Musician/Singer",
                    es: "Músico / Cantante",
                },
                value: "Musician/Singer",
            },
            {
                text: {
                    en: "Photographer",
                    es: "Fotógrafo",
                },
                value: "Photographer",
            },
            {
                text: {
                    en: "Printer",
                    es: "Impresora",
                },
                value: "Printer",
            },
            {
                text: {
                    en: "Producer",
                    es: "Productor",
                },
                value: "Producer",
            },
            {
                text: {
                    en: "Production Crew",
                    es: "Equipo de producción",
                },
                value: "Production Crew",
            },
            {
                text: {
                    en: "Projectionist",
                    es: "Proyeccionista",
                },
                value: "Projectionist",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Ticket Sales/Usher",
                    es: "Venta de entradas / Acomodador",
                },
                value: "Ticket Sales/Usher",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Banking/Finance/Real Estate",
            es: "Banca / Finanzas / Bienes raíces",
        },
        value: "Banking/Finance/Real Estate",

        Occupations: [
            {
                text: {
                    en: "Accountant/Auditor",
                    es: "Contador / Auditor",
                },
                value: "Accountant/Auditor",
            },
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Analyst",
                    es: "Analista",
                },
                value: "Analyst",
            },
            {
                text: {
                    en: "Appraiser-Real Estate",
                    es: "Tasador de bienes raíces",
                },
                value: "Appraiser-Real Estate",
            },
            {
                text: {
                    en: "Bookkeeper",
                    es: "Contable",
                },
                value: "Bookkeeper",
            },
            {
                text: {
                    en: "Broker",
                    es: "Corredor",
                },
                value: "Broker",
            },
            {
                text: {
                    en: "Branch Manager",
                    es: "Gerente de sucursal",
                },
                value: "Branch Manager",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Collections",
                    es: "Colecciones",
                },
                value: "Collections",
            },
            {
                text: {
                    en: "Consultant",
                    es: "Consultor",
                },
                value: "Consultant",
            },
            {
                text: {
                    en: "Controller",
                    es: "Controlador",
                },
                value: "Controller",
            },
            {
                text: {
                    en: "CSR/Teller",
                    es: "CSR / Cajero",
                },
                value: "CSR/Teller",
            },
            {
                text: {
                    en: "Director/Administrator",
                    es: "Director / Administrador",
                },
                value: "Director/Administrator",
            },
            {
                text: {
                    en: "Executive",
                    es: "Ejecutivo",
                },
                value: "Executive",
            },
            {
                text: {
                    en: "Financial Advisor",
                    es: "Asesor financiero",
                },
                value: "Financial Advisor",
            },
            {
                text: {
                    en: "Investment Banker",
                    es: "Banquero de inversiones",
                },
                value: "Investment Banker",
            },
            {
                text: {
                    en: "Investor",
                    es: "Inversor",
                },
                value: "Investor",
            },
            {
                text: {
                    en: "Loan/Escrow Processor",
                    es: "Procesador de préstamos / depósito en garantía",
                },
                value: "Loan/Escrow Processor",
            },
            {
                text: {
                    en: "Manager-Credit/Loan",
                    es: "Gerente de crédito / préstamo",
                },
                value: "Manager-Credit/Loan",
            },
            {
                text: {
                    en: "Manager-Portfolio/Production",
                    es: "Gerente de cartera / producción",
                },
                value: "Manager-Portfolio/Production",
            },
            {
                text: {
                    en: "Manager-Property",
                    es: "Gerente de propiedad",
                },
                value: "Manager-Property",
            },
            {
                text: {
                    en: "Realtor",
                    es: "Agente inmobiliario",
                },
                value: "Realtor",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Sales Agent/Representative",
                    es: "Agente de ventas / Representante",
                },
                value: "Sales Agent/Representative",
            },
            {
                text: {
                    en: "Trader Financial Instruments",
                    es: "Comerciante de instrumentos financieros",
                },
                value: "Trader Financial Instruments",
            },
            {
                text: {
                    en: "Underwriter",
                    es: "Suscriptor",
                },
                value: "Underwriter",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Business/Sales/Office",
            es: "Negocios / Ventas / Oficina",
        },
        value: "Business/Sales/Office",
        Occupations: [
            {
                text: {
                    en: "Account Executive",
                    es: "Ejecutivo de cuentas",
                },
                value: "Account Executive",
            },
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Buyer",
                    es: "Comprador",
                },
                value: "Buyer",
            },
            {
                text: {
                    en: "Cashier/Checker",
                    es: "Cajero / Verificador",
                },
                value: "Cashier/Checker",
            },
            {
                text: {
                    en: "Clerk-Office",
                    es: "Empleado de oficina",
                },
                value: "Clerk-Office",
            },
            {
                text: {
                    en: "Consultant",
                    es: "Consultor",
                },
                value: "Consultant",
            },
            {
                text: {
                    en: "Customer Service Representative",
                    es: "Representante de servicio al cliente",
                },
                value: "Customer Service Representative",
            },
            {
                text: {
                    en: "Director/Administrator",
                    es: "Director / Administrador",
                },
                value: "Director/Administrator",
            },
            {
                text: {
                    en: "Executive",
                    es: "Ejecutivo",
                },
                value: "Executive",
            },
            {
                text: {
                    en: "H.R. Representative",
                    es: "Representante de recursos humanos",
                },
                value: "H.R. Representative",
            },
            {
                text: {
                    en: "Manager-Department/Store",
                    es: "Gerente de departamento / tienda",
                },
                value: "Manager-Department/Store",
            },
            {
                text: {
                    en: "Manager-District",
                    es: "Gerente de distrito",
                },
                value: "Manager-District",
            },
            {
                text: {
                    en: "Manager-Finance/Insurance",
                    es: "Gerente de finanzas / seguros",
                },
                value: "Manager-Finance/Insurance",
            },
            {
                text: {
                    en: "Manager-General Operations",
                    es: "Gerente de operaciones gener ales",
                },
                value: "Manager-General Operations",
            },
            {
                text: {
                    en: "Manager-H.R./Public Relations",
                    es: "Gerente de recursos humanos / Relaciones públicas",
                },
                value: "Manager-H.R./Public Relations",
            },
            {
                text: {
                    en: "Manager-Marketing/Sales",
                    es: "Gerente de marketing / ventas",
                },
                value: "Manager-Marketing/Sales",
            },
            {
                text: {
                    en: "Manager/Supervisor-Office",
                    es: "Gerente / Supervisor de oficina",
                },
                value: "Manager/Supervisor-Office",
            },
            {
                text: {
                    en: "Marketing Researcher",
                    es: "Investigador de marketing",
                },
                value: "Marketing Researcher",
            },
            {
                text: {
                    en: "Messenger/Courier",
                    es: "Mensajero / Mensajero",
                },
                value: "Messenger/Courier",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Sales-Counter/Rental",
                    es: "Ventas-Contador / Alquiler",
                },
                value: "Sales-Counter/Rental",
            },
            {
                text: {
                    en: "Sales-Homebased",
                    es: "Ventas en el hogar",
                },
                value: "Sales-Homebased",
            },
            {
                text: {
                    en: "Sales-Manufacture Rep",
                    es: "Ventas-Representante de fabricación",
                },
                value: "Sales-Manufacture Rep",
            },
            {
                text: {
                    en: "Sales-Retail/Wholesale",
                    es: "Ventas al por menor / Mayorista",
                },
                value: "Sales-Retail/Wholesale",
            },
            {
                text: {
                    en: "Sales-Route/Vendor",
                    es: "Ventas-Ruta / Vendedor",
                },
                value: "Sales-Route/Vendor",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Construction/Energy/Mining",
            es: "Construcción / Energía / Minería",
        },
        value: "Construction/Energy/Mining",
        Occupations: [
            {
                text: {
                    en: "Appraiser-Real Estate",
                    es: "Tasador de bienes raíces",
                },
                value: "Appraiser-Real Estate",
            },
            {
                text: {
                    en: "Boiler Operator/Maker",
                    es: "Operador / Fabricante de calderas",
                },
                value: "Boiler Operator/Maker",
            },
            {
                text: {
                    en: "Bricklayer/Mason",
                    es: "Albañil / Albañil",
                },
                value: "Bricklayer/Mason",
            },
            {
                text: {
                    en: "Carpenter",
                    es: "Carpintero",
                },
                value: "Carpenter",
            },
            {
                text: {
                    en: "Carpet Installer",
                    es: "Instalador de alfombras",
                },
                value: "Carpet Installer",
            },
            {
                text: {
                    en: "Concrete Worker",
                    es: "Trabajador de concreto",
                },
                value: "Concrete Worker",
            },
            {
                text: {
                    en: "Construction-Project Manager",
                    es: "Gerente de proyecto de construcción",
                },
                value: "Construction-Project Manager",
            },
            {
                text: {
                    en: "Construction Worker",
                    es: "Trabajador de la construcción",
                },
                value: "Construction Worker",
            },
            {
                text: {
                    en: "Contractor",
                    es: "Contratista",
                },
                value: "Contractor",
            },
            {
                text: {
                    en: "Crane Operator",
                    es: "Operador de grúa",
                },
                value: "Crane Operator",
            },
            {
                text: {
                    en: "Electrician/Linesman",
                    es: "Electricista / Liniero",
                },
                value: "Electrician/Linesman",
            },
            {
                text: {
                    en: "Elevator Technician/Installer",
                    es: "Técnico / Instalador de ascensores",
                },
                value: "Elevator Technician/Installer",
            },
            {
                text: {
                    en: "Equipment Operator",
                    es: "Operador de equipo",
                },
                value: "Equipment Operator",
            },
            {
                text: {
                    en: "Floor Layer/Finisher",
                    es: "Capa de piso / Acabador",
                },
                value: "Floor Layer/Finisher",
            },
            {
                text: {
                    en: "Foreman/Supervisor",
                    es: "Capataz / Supervisor",
                },
                value: "Foreman/Supervisor",
            },
            {
                text: {
                    en: "Handyman",
                    es: "Manitas",
                },
                value: "Handyman",
            },
            {
                text: {
                    en: "Heat/Air Technician",
                    es: "Técnico de calor / aire",
                },
                value: "Heat/Air Technician",
            },
            {
                text: {
                    en: "Inspector",
                    es: "Inspector",
                },
                value: "Inspector",
            },
            {
                text: {
                    en: "Laborer/Worker",
                    es: "Obrero / Trabajador",
                },
                value: "Laborer/Worker",
            },
            {
                text: {
                    en: "Metalworker",
                    es: "Metalúrgico",
                },
                value: "Metalworker",
            },
            {
                text: {
                    en: "Miner",
                    es: "Minero",
                },
                value: "Miner",
            },
            {
                text: {
                    en: "Oil/Gas Driller/Rig Operator",
                    es: "Perforador / Operador de plataforma petrolífera",
                },
                value: "Oil/Gas Driller/Rig Operator",
            },
            {
                text: {
                    en: "Painter",
                    es: "Pintor",
                },
                value: "Painter",
            },
            {
                text: {
                    en: "Plaster/Drywall/Stucco",
                    es: "Enlucido / Tablero de yeso / Estuco",
                },
                value: "Plaster/Drywall/Stucco",
            },
            {
                text: {
                    en: "Plumber",
                    es: "Fontanero",
                },
                value: "Plumber",
            },
            {
                text: {
                    en: "Roofer",
                    es: "Techador",
                },
                value: "Roofer",
            },
            {
                text: {
                    en: "Utility Worker",
                    es: "Trabajador de servicios públicos",
                },
                value: "Utility Worker",
            },
            {
                text: {
                    en: "Welder",
                    es: "Soldador",
                },
                value: "Welder",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Education/Library",
            es: "Educación / Biblioteca",
        },
        value: "Education/Library",

        Occupations: [
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Audio-Visual Tech",
                    es: "Técnico audiovisual",
                },
                value: "Audio-Visual Tech",
            },
            {
                text: {
                    en: "Child/Daycare Worker",
                    es: "Trabajador de guardería / guardería",
                },
                value: "Child/Daycare Worker",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Counselor",
                    es: "Consejero",
                },
                value: "Counselor",
            },
            {
                text: {
                    en: "Graduate Teaching Assistant",
                    es: "Asistente de enseñanza de posgrado",
                },
                value: "Graduate Teaching Assistant",
            },
            {
                text: {
                    en: "Instructor-Vocation",
                    es: "Instructor-Vocación",
                },
                value: "Instructor-Vocation",
            },
            {
                text: {
                    en: "Librarian/Curator",
                    es: "Bibliotecario / Curador",
                },
                value: "Librarian/Curator",
            },
            {
                text: {
                    en: "Principal",
                    es: "Director",
                },
                value: "Principal",
            },
            {
                text: {
                    en: "Professor College",
                    es: "Profesor universitario",
                },
                value: "Professor College",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Superintendent",
                    es: "Superintendente",
                },
                value: "Superintendent",
            },
            {
                text: {
                    en: "Teacher College",
                    es: "Profesor universitario",
                },
                value: "Teacher College",
            },
            {
                text: {
                    en: "Teacher K-12",
                    es: "Profesor K-12",
                },
                value: "Teacher K-12",
            },
            {
                text: {
                    en: "Teaching Assistant/Aide",
                    es: "Asistente / Auxiliar de enseñanza",
                },
                value: "Teaching Assistant/Aide",
            },
            {
                text: {
                    en: "Tutor",
                    es: "Tutor",
                },
                value: "Tutor",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Engineer/Architect/Science/Math",
            es: "Ingeniero / Arquitecto / Ciencia / Matemáticas",
        },
        value: "Engineer/Architect/Science/Math",
        Occupations: [
            {
                text: {
                    en: "Actuary",
                    es: "Actuario",
                },
                value: "Actuary",
            },
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Analyst",
                    es: "Analista",
                },
                value: "Analyst",
            },
            {
                text: {
                    en: "Architect",
                    es: "Arquitecto",
                },
                value: "Architect",
            },
            {
                text: {
                    en: "Chemist",
                    es: "Químico",
                },
                value: "Chemist",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Clinical Data Coordinator",
                    es: "Coordinador de datos clínicos",
                },
                value: "Clinical Data Coordinator",
            },
            {
                text: {
                    en: "Drafter",
                    es: "Dibujante",
                },
                value: "Drafter",
            },
            {
                text: {
                    en: "Engineer",
                    es: "Ingeniero",
                },
                value: "Engineer",
            },
            {
                text: {
                    en: "Lab Assistant",
                    es: "Asistente de laboratorio",
                },
                value: "Lab Assistant",
            },
            {
                text: {
                    en: "Manager-Project",
                    es: "Gerente de proyecto",
                },
                value: "Manager-Project",
            },
            {
                text: {
                    en: "Manager-R&D",
                    es: "Gerente de I + D",
                },
                value: "Manager-R&D",
            },
            {
                text: {
                    en: "Mathematician",
                    es: "Matemático",
                },
                value: "Mathematician",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Research Program Director",
                    es: "Director del programa de investigación",
                },
                value: "Research Program Director",
            },
            {
                text: {
                    en: "Researcher",
                    es: "Investigador",
                },
                value: "Researcher",
            },
            {
                text: {
                    en: "Scientist",
                    es: "Científico",
                },
                value: "Scientist",
            },
            {
                text: {
                    en: "Sociologist",
                    es: "Sociólogo",
                },
                value: "Sociologist",
            },
            {
                text: {
                    en: "Surveyor/Mapmaker",
                    es: "Topógrafo / Cartógrafo",
                },
                value: "Surveyor/Mapmaker",
            },
            {
                text: {
                    en: "Technician",
                    es: "Técnico",
                },
                value: "Technician",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Food Service/Hotel Services",
            es: "Servicios de alimentación / Hotel",
        },
        value: "Food Service/Hotel Services",

        Occupations: [
            {
                text: {
                    en: "Baker",
                    es: "Panadero",
                },
                value: "Baker",
            },
            {
                text: {
                    en: "Bartender",
                    es: "Camarero",
                },
                value: "Bartender",
            },
            {
                text: {
                    en: "Bellhop",
                    es: "Botones",
                },
                value: "Bellhop",
            },
            {
                text: {
                    en: "Bus Person",
                    es: "Persona del autobús",
                },
                value: "Bus Person",
            },
            {
                text: {
                    en: "Caterer",
                    es: "Catering",
                },
                value: "Caterer",
            },
            {
                text: {
                    en: "Chef",
                    es: "Chef",
                },
                value: "Chef",
            },
            {
                text: {
                    en: "Concessionaire",
                    es: "Concesionario",
                },
                value: "Concessionaire",
            },
            {
                text: {
                    en: "Concierge",
                    es: "Conserje",
                },
                value: "Concierge",
            },
            {
                text: {
                    en: "Cook-Restaurant/Cafeteria",
                    es: "Cocinero-Restaurante / Cafetería",
                },
                value: "Cook-Restaurant/Cafeteria",
            },
            {
                text: {
                    en: "Cook/Worker-Fast Food",
                    es: "Cocinero / Trabajador de comida rápida",
                },
                value: "Cook/Worker-Fast Food",
            },
            {
                text: {
                    en: "Delivery Person",
                    es: "Persona de entrega",
                },
                value: "Delivery Person",
            },
            {
                text: {
                    en: "Desk Clerk",
                    es: "Empleado de recepción",
                },
                value: "Desk Clerk",
            },
            {
                text: {
                    en: "Dishwasher",
                    es: "Lavavajillas",
                },
                value: "Dishwasher",
            },
            {
                text: {
                    en: "Food Production/Packing",
                    es: "Producción de alimentos / Embalaje",
                },
                value: "Food Production/Packing",
            },
            {
                text: {
                    en: "Host/Maitre d'",
                    es: "Anfitrión / Maitre d '",
                },
                value: "Host/Maitre d'",
            },
            {
                text: {
                    en: "Housekeeper/Maid",
                    es: "Ama de llaves / Criada",
                },
                value: "Housekeeper/Maid",
            },
            {
                text: {
                    en: "Manager",
                    es: "Gerente",
                },
                value: "Manager",
            },
            {
                text: {
                    en: "Valet",
                    es: "Valet",
                },
                value: "Valet",
            },
            {
                text: {
                    en: "Waiter/Waitress",
                    es: "Camarero / Camarera",
                },
                value: "Waiter/Waitress",
            },
            {
                text: {
                    en: "Wine Steward",
                    es: "Sommelier",
                },
                value: "Wine Steward",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Government/Military",
            es: "Gobierno / Militar",
        },
        value: "Government/Military",
        Occupations: [
            {
                text: {
                    en: "Accountant/Auditor",
                    es: "Contador / Auditor",
                },
                value: "Accountant/Auditor",
            },
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Analyst",
                    es: "Analista",
                },
                value: "Analyst",
            },
            {
                text: {
                    en: "Attorney",
                    es: "Abogado",
                },
                value: "Attorney",
            },
            {
                text: {
                    en: "Chief Executive",
                    es: "Director ejecutivo",
                },
                value: "Chief Executive",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Commissioner",
                    es: "Comisionado",
                },
                value: "Commissioner",
            },
            {
                text: {
                    en: "Council Member",
                    es: "Miembro del consejo",
                },
                value: "Council Member",
            },
            {
                text: {
                    en: "Director/Administrator",
                    es: "Director / Administrador",
                },
                value: "Director/Administrator",
            },
            {
                text: {
                    en: "Enlisted Military Personnel(E1-E4)",
                    es: "Personal militar alistado (E1-E4)",
                },
                value: "Enlisted Military Personnel(E1-E4)",
            },
            {
                text: {
                    en: "Legislator",
                    es: "Legislador",
                },
                value: "Legislator",
            },
            {
                text: {
                    en: "Mayor/City Manager",
                    es: "Alcalde / Gerente de la ciudad",
                },
                value: "Mayor/City Manager",
            },
            {
                text: {
                    en: "Meter Reader",
                    es: "Lector de medidores",
                },
                value: "Meter Reader",
            },
            {
                text: {
                    en: "NCO (E5-9)",
                    es: "NCO (E5-9)",
                },
                value: "NCO (E5-9)",
            },
            {
                text: {
                    en: "Officer-Commissioned",
                    es: "Oficial comisionado",
                },
                value: "Officer-Commissioned",
            },
            {
                text: {
                    en: "Officer-Warrant",
                    es: "Oficial de garantía",
                },
                value: "Officer-Warrant",
            },
            {
                text: {
                    en: "Park Ranger",
                    es: "Guardabosques",
                },
                value: "Park Ranger",
            },
            {
                text: {
                    en: "Planner",
                    es: "Planificador",
                },
                value: "Planner",
            },
            {
                text: {
                    en: "Postmaster",
                    es: "Director de correos",
                },
                value: "Postmaster",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Regulator",
                    es: "Regulador",
                },
                value: "Regulator",
            },
            {
                text: {
                    en: "US Postal Worker",
                    es: "Trabajador postal de EE. UU.",
                },
                value: "US Postal Worker",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Homemaker(full-time)",
            es: "Ama de casa (tiempo completo)",
        },
        value: "Homemaker(full-time)",
        Occupations: [
            {
                text: {
                    en: "Homemaker(full-time)",
                    es: "Ama de casa (tiempo completo)",
                },
                value: "Homemaker(full-time)",
            },
        ]
    },
    {
        text: {
            en: "Information Technology",
            es: "Tecnología de la información",
        },
        value: "Information Technology",
        Occupations: [
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Analyst",
                    es: "Analista",
                },
                value: "Analyst",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Director/Administrator",
                    es: "Director / Administrador",
                },
                value: "Director/Administrator",
            },
            {
                text: {
                    en: "Engineer-Hardware",
                    es: "Ingeniero de hardware",
                },
                value: "Engineer-Hardware",
            },
            {
                text: {
                    en: "Engineer-Software",
                    es: "Ingeniero de software",
                },
                value: "Engineer-Software",
            },
            {
                text: {
                    en: "Engineer-Systems",
                    es: "Ingeniero de sistemas",
                },
                value: "Engineer-Systems",
            },
            {
                text: {
                    en: "Executive",
                    es: "Ejecutivo",
                },
                value: "Executive",
            },
            {
                text: {
                    en: "Manager-Systems",
                    es: "Gerente de sistemas",
                },
                value: "Manager-Systems",
            },
            {
                text: {
                    en: "Network Administrator",
                    es: "Administrador de red",
                },
                value: "Network Administrator",
            },
            {
                text: {
                    en: "Programmer",
                    es: "Programador",
                },
                value: "Programmer",
            },
            {
                text: {
                    en: "Project Coordinator",
                    es: "Coordinador de proyecto",
                },
                value: "Project Coordinator",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Support Technician",
                    es: "Técnico de soporte",
                },
                value: "Support Technician",
            },
            {
                text: {
                    en: "Systems Security",
                    es: "Seguridad de sistemas",
                },
                value: "Systems Security",
            },
            {
                text: {
                    en: "Technical Writer",
                    es: "Redactor técnico",
                },
                value: "Technical Writer",
            },
            {
                text: {
                    en: "Web Developer",
                    es: "Desarrollador web",
                },
                value: "Web Developer",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Insurance",
            es: "Seguro",
        },
        value: "Insurance",
        Occupations: [
            {
                text: {
                    en: "Accountant/Auditor",
                    es: "Contador / Auditor",
                },
                value: "Accountant/Auditor",
            },
            {
                text: {
                    en: "Actuary",
                    es: "Actuario",
                },
                value: "Actuary",
            },
            {
                text: {
                    en: "Actuarial Clerk",
                    es: "Empleado actuarial",
                },
                value: "Actuarial Clerk",
            },
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Agent/Broker",
                    es: "Agente / Corredor",
                },
                value: "Agent/Broker",
            },
            {
                text: {
                    en: "Analyst",
                    es: "Analista",
                },
                value: "Analyst",
            },
            {
                text: {
                    en: "Attorney",
                    es: "Abogado",
                },
                value: "Attorney",
            },
            {
                text: {
                    en: "Claims Adjuster",
                    es: "Ajustador de reclamos",
                },
                value: "Claims Adjuster",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Commissioner",
                    es: "Comisionado",
                },
                value: "Commissioner",
            },
            {
                text: {
                    en: "Customer Service Representative",
                    es: "Representante de servicio al cliente",
                },
                value: "Customer Service Representative",
            },
            {
                text: {
                    en: "Director/Administrator",
                    es: "Director / Administrador",
                },
                value: "Director/Administrator",
            },
            {
                text: {
                    en: "Executive",
                    es: "Ejecutivo",
                },
                value: "Executive",
            },
            {
                text: {
                    en: "Insurance CSR",
                    es: "Seguro CSR",
                },
                value: "Insurance CSR",
            },
            {
                text: {
                    en: "Product Manager",
                    es: "Gerente de producto",
                },
                value: "Product Manager",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Sales Representative",
                    es: "Representante de ventas",
                },
                value: "Sales Representative",
            },
            {
                text: {
                    en: "Underwriter",
                    es: "Suscriptor",
                },
                value: "Underwriter",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Legal/Law Enforcement/Security",
            es: "Legal / Aplicación de la ley / Seguridad",
        },
        value: "Legal/Law Enforcement/Security",
        Occupations: [
            {
                text: {
                    en: "Airport Security Officer",
                    es: "Oficial de seguridad del aeropuerto",
                },
                value: "Airport Security Officer",
            },
            {
                text: {
                    en: "Animal Control Officer",
                    es: "Oficial de control de animales",
                },
                value: "Animal Control Officer",
            },
            {
                text: {
                    en: "Attorney",
                    es: "Abogado",
                },
                value: "Attorney",
            },
            {
                text: {
                    en: "Bailiff",
                    es: "Alguacil",
                },
                value: "Bailiff",
            },
            {
                text: {
                    en: "Corrections Officer",
                    es: "Oficial de correcciones",
                },
                value: "Corrections Officer",
            },
            {
                text: {
                    en: "Court Clerk/Reporter",
                    es: "Secretario / Reportero de la corte",
                },
                value: "Court Clerk/Reporter",
            },
            {
                text: {
                    en: "Deputy Sheriff",
                    es: "Alguacil adjunto",
                },
                value: "Deputy Sheriff",
            },
            {
                text: {
                    en: "Dispatcher",
                    es: "Despachador",
                },
                value: "Dispatcher",
            },
            {
                text: {
                    en: "Examiner",
                    es: "Examinador",
                },
                value: "Examiner",
            },
            {
                text: {
                    en: "Federal Agent/Marshall",
                    es: "Agente federal / Marshall",
                },
                value: "Federal Agent/Marshall",
            },
            {
                text: {
                    en: "Fire Chief",
                    es: "Jefe de bomberos",
                },
                value: "Fire Chief",
            },
            {
                text: {
                    en: "Fire Fighter/Supervisor",
                    es: "Bombero / Supervisor",
                },
                value: "Fire Fighter/Supervisor",
            },
            {
                text: {
                    en: "Gaming Officer/Investigator",
                    es: "Oficial de juegos / Investigador",
                },
                value: "Gaming Officer/Investigator",
            },
            {
                text: {
                    en: "Highway Patrol Officer",
                    es: "Oficial de patrulla de carreteras",
                },
                value: "Highway Patrol Officer",
            },
            {
                text: {
                    en: "Judge/Hearing Officer",
                    es: "Juez / Oficial de audiencia",
                },
                value: "Judge/Hearing Officer",
            },
            {
                text: {
                    en: "Legal Assistant/Secretary",
                    es: "Asistente legal / Secretaria",
                },
                value: "Legal Assistant/Secretary",
            },
            {
                text: {
                    en: "Paralegal/Law Clerk",
                    es: "Asistente legal / Secretaria",
                },
                value: "Paralegal/Law Clerk",
            },
            {
                text: {
                    en: "Police Chief",
                    es: "Jefe de policía",
                },
                value: "Police Chief",
            },
            {
                text: {
                    en: "Police Detective/Investigator",
                    es: "Detective de policía / Investigador",
                },
                value: "Police Detective/Investigator",
            },
            {
                text: {
                    en: "Police Officer/Supervisor",
                    es: "Oficial de policía / Supervisor",
                },
                value: "Police Officer/Supervisor",
            },
            {
                text: {
                    en: "Private Investigator/Detective",
                    es: "Investigador privado / Detective",
                },
                value: "Private Investigator/Detective",
            },
            {
                text: {
                    en: "Process Server",
                    es: "Servidor de procesos",
                },
                value: "Process Server",
            },
            {
                text: {
                    en: "Security Guard",
                    es: "Guardia de seguridad",
                },
                value: "Security Guard",
            },
            {
                text: {
                    en: "Sheriff",
                    es: "Alguacil",
                },
                value: "Sheriff",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Medical/Social Services/Religion",
            es: "Servicios médicos / sociales / religión",
        },
        value: "Medical/Social Services/Religion",
        Occupations: [
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Assistant-Medic/Dent/Vet",
                    es: "Asistente-Medic / Dent / Vet",
                },
                value: "Assistant-Medic/Dent/Vet",
            },
            {
                text: {
                    en: "Chiropractor",
                    es: "Quiropráctico",
                },
                value: "Chiropractor",
            },
            {
                text: {
                    en: "Clergy",
                    es: "Clero",
                },
                value: "Clergy",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Client Care Worker",
                    es: "Trabajador de atención al cliente",
                },
                value: "Client Care Worker",
            },
            {
                text: {
                    en: "Dental Hygienist",
                    es: "Higienista dental",
                },
                value: "Dental Hygienist",
            },
            {
                text: {
                    en: "Dentist",
                    es: "Dentista",
                },
                value: "Dentist",
            },
            {
                text: {
                    en: "Dietician",
                    es: "Dietista",
                },
                value: "Dietician",
            },
            {
                text: {
                    en: "Doctor",
                    es: "Doctor",
                },
                value: "Doctor",
            },
            {
                text: {
                    en: "Hospice Volunteer",
                    es: "Voluntario de hospicio",
                },
                value: "Hospice Volunteer",
            },
            {
                text: {
                    en: "Lab Assistant",
                    es: "Asistente de laboratorio",
                },
                value: "Lab Assistant",
            },
            {
                text: {
                    en: "Mortician",
                    es: "Mortician",
                },
                value: "Mortician",
            },
            {
                text: {
                    en: "Nurse-C.N.A.",
                    es: "Enfermera-C.N.A.",
                },
                value: "Nurse-C.N.A.",
            },
            {
                text: {
                    en: "Nurse-LPN",
                    es: "Enfermera-LPN",
                },
                value: "Nurse-LPN",
            },
            {
                text: {
                    en: "Nurse-RN",
                    es: "Enfermera-RN",
                },
                value: "Nurse-RN",
            },
            {
                text: {
                    en: "Nurse Practioner",
                    es: "Enfermera Practioner",
                },
                value: "Nurse Practioner",
            },
            {
                text: {
                    en: "Optometrist",
                    es: "Optometrista",
                },
                value: "Optometrist",
            },
            {
                text: {
                    en: "Orthodontist",
                    es: "Ortodoncista",
                },
                value: "Orthodontist",
            },
            {
                text: {
                    en: "Paramedic/E.M. Technician",
                    es: "Paramédico / Técnico de E.M.",
                },
                value: "Paramedic/E.M. Technician",
            },
            {
                text: {
                    en: "Pharmacist",
                    es: "Farmacéutico",
                },
                value: "Pharmacist",
            },
            {
                text: {
                    en: "Physical Therapist",
                    es: "Fisioterapeuta",
                },
                value: "Physical Therapist",
            },
            {
                text: {
                    en: "Psychologist",
                    es: "Psicólogo",
                },
                value: "Psychologist",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Social Worker",
                    es: "Trabajador social",
                },
                value: "Social Worker",
            },
            {
                text: {
                    en: "Support Services",
                    es: "Servicios de apoyo",
                },
                value: "Support Services",
            },
            {
                text: {
                    en: "Technician",
                    es: "Técnico",
                },
                value: "Technician",
            },
            {
                text: {
                    en: "Therapist",
                    es: "Terapeuta",
                },
                value: "Therapist",
            },
            {
                text: {
                    en: "Veterinarian",
                    es: "Veterinario",
                },
                value: "Veterinarian",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Personal Care/Service",
            es: "Cuidado personal / Servicio",
        },
        value: "Personal Care/Service",
        Occupations: [
            {
                text: {
                    en: "Caregiver",
                    es: "Cuidador",
                },
                value: "Caregiver",
            },
            {
                text: {
                    en: "Dry Cleaner/Laundry",
                    es: "Tintorería / Lavandería",
                },
                value: "Dry Cleaner/Laundry",
            },
            {
                text: {
                    en: "Hair Stylist/Barber",
                    es: "Estilista / Barbero",
                },
                value: "Hair Stylist/Barber",
            },
            {
                text: {
                    en: "Housekeeper",
                    es: "Ama de llaves",
                },
                value: "Housekeeper",
            },
            {
                text: {
                    en: "Manicurist",
                    es: "Manicurista",
                },
                value: "Manicurist",
            },
            {
                text: {
                    en: "Masseuse",
                    es: "Masajista",
                },
                value: "Masseuse",
            },
            {
                text: {
                    en: "Nanny",
                    es: "Niñera",
                },
                value: "Nanny",
            },
            {
                text: {
                    en: "Pet Services",
                    es: "Servicios para mascotas",
                },
                value: "Pet Services",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Production/Manufacturing",
            es: "Producción / Fabricación",
        },
        value: "Production/Manufacturing",
        Occupations: [
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Factory Worker",
                    es: "Trabajador de fábrica",
                },
                value: "Factory Worker",
            },
            {
                text: {
                    en: "Foreman/Supervisor",
                    es: "Capataz / Supervisor",
                },
                value: "Foreman/Supervisor",
            },
            {
                text: {
                    en: "Furniture Finisher",
                    es: "Acabador de muebles",
                },
                value: "Furniture Finisher",
            },
            {
                text: {
                    en: "Inspector",
                    es: "Inspector",
                },
                value: "Inspector",
            },
            {
                text: {
                    en: "Jeweler",
                    es: "Joyero",
                },
                value: "Jeweler",
            },
            {
                text: {
                    en: "Machine Operator",
                    es: "Operador de maquina",
                },
                value: "Machine Operator",
            },
            {
                text: {
                    en: "Packer",
                    es: "Empacador",
                },
                value: "Packer",
            },
            {
                text: {
                    en: "Plant Manager",
                    es: "Gerente de planta",
                },
                value: "Plant Manager",
            },
            {
                text: {
                    en: "Printer/Bookbinder",
                    es: "Impresor / Encuadernador",
                },
                value: "Printer/Bookbinder",
            },
            {
                text: {
                    en: "Quality Control",
                    es: "Control de calidad",
                },
                value: "Quality Control",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Refining Operator",
                    es: "Operador de refinación",
                },
                value: "Refining Operator",
            },
            {
                text: {
                    en: "Shoemaker",
                    es: "Zapatero",
                },
                value: "Shoemaker",
            },
            {
                text: {
                    en: "Tailor/Custom Sewer",
                    es: "Sastre / Costurera personalizada",
                },
                value: "Tailor/Custom Sewer",
            },
            {
                text: {
                    en: "Textile Worker",
                    es: "Trabajador textil",
                },
                value: "Textile Worker",
            },
            {
                text: {
                    en: "Upholsterer",
                    es: "Tapicero",
                },
                value: "Upholsterer",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Repair/Maintenance/Grounds",
            es: "Reparación / Mantenimiento / Terrenos",
        },
        value: "Repair/Maintenance/Grounds",
        Occupations: [
            {
                text: {
                    en: "Building Maintenance Engineer",
                    es: "Ingeniero de mantenimiento de edificios",
                },
                value: "Building Maintenance Engineer",
            },
            {
                text: {
                    en: "Custodian/Janitor",
                    es: "Custodio / Conserje",
                },
                value: "Custodian/Janitor",
            },
            {
                text: {
                    en: "Electrician",
                    es: "Electricista",
                },
                value: "Electrician",
            },
            {
                text: {
                    en: "Field Service Technician",
                    es: "Técnico de servicio de campo",
                },
                value: "Field Service Technician",
            },
            {
                text: {
                    en: "Handyman",
                    es: "Manitas",
                },
                value: "Handyman",
            },
            {
                text: {
                    en: "Heat/Air Conditioner Repairman",
                    es: "Reparador de calefacción / aire acondicionado",
                },
                value: "Heat/Air Conditioner Repairman",
            },
            {
                text: {
                    en: "Housekeeper/Maid",
                    es: "Ama de llaves / Criada",
                },
                value: "Housekeeper/Maid",
            },
            {
                text: {
                    en: "Landscape/Grounds Maintenance",
                    es: "Paisaje / Mantenimiento de terrenos",
                },
                value: "Landscape/Grounds Maintenance",
            },
            {
                text: {
                    en: "Maintenance Mechanic",
                    es: "Mecánico de mantenimiento",
                },
                value: "Maintenance Mechanic",
            },
            {
                text: {
                    en: "Mechanic",
                    es: "Mecánico",
                },
                value: "Mechanic",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Retired(full-time)",
            es: "Jubilado (tiempo completo)",
        },
        value: "Retired(full-time)",

        Occupations: [
            {
                text: {
                    en: "Retired(full-time)",
                    es: "Jubilado (tiempo completo)",
                },
                value: "Retired(full-time)",
            },
        ]
    },
    {
        text: {
            en: "Sports/Recreation",
            es: "Deportes / Recreación",
        },
        value: "Sports/Recreation",
        Occupations: [
            {
                text: {
                    en: "Activity/Recreational Assistant",
                    es: "Asistente de actividad / recreación",
                },
                value: "Activity/Recreational Assistant",
            },
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Agent",
                    es: "Agente",
                },
                value: "Agent",
            },
            {
                text: {
                    en: "Athlete",
                    es: "Atleta",
                },
                value: "Athlete",
            },
            {
                text: {
                    en: "Camp Counselor/Lead",
                    es: "Consejero / Líder de campamento",
                },
                value: "Camp Counselor/Lead",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Coach",
                    es: "Entrenador",
                },
                value: "Coach",
            },
            {
                text: {
                    en: "Concessionaire",
                    es: "Concesionario",
                },
                value: "Concessionaire",
            },
            {
                text: {
                    en: "Director Program",
                    es: "Director del programa",
                },
                value: "Director Program",
            },
            {
                text: {
                    en: "Event Manager/Promoter",
                    es: "Gerente de eventos / Promotor",
                },
                value: "Event Manager/Promoter",
            },
            {
                text: {
                    en: "Life Guard",
                    es: "Salvavidas",
                },
                value: "Life Guard",
            },
            {
                text: {
                    en: "Manager-Fitness Club",
                    es: "Gerente del club de fitness",
                },
                value: "Manager-Fitness Club",
            },
            {
                text: {
                    en: "Park Ranger",
                    es: "Guardabosques",
                },
                value: "Park Ranger",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Sales-Ticket/Membership",
                    es: "Ventas-Boleto / Membresía",
                },
                value: "Sales-Ticket/Membership",
            },
            {
                text: {
                    en: "Sports Broadcast/Journalist",
                    es: "Deportes Broadcast / Periodista",
                },
                value: "Sports Broadcast/Journalist",
            },
            {
                text: {
                    en: "Trainer/Instructor",
                    es: "Entrenador / Instructor",
                },
                value: "Trainer/Instructor",
            },
            {
                text: {
                    en: "Umpire/Referee",
                    es: "Árbitro / Árbitro",
                },
                value: "Umpire/Referee",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Student(full-time)",
            es: "Estudiante (tiempo completo)",
        },
        value: "Student(full-time)",

        Occupations: [
            {
                text: {
                    en: "Student(full-time)",
                    es: "Estudiante (tiempo completo)",
                },
                value: "Student(full-time)",
            },
        ]
    },
    {
        text: {
            en: "Travel/Transportation/Storage",
            es: "Viajes / Transporte / Almacenamiento",
        },
        value: "Travel/Transportation/Storage",
        Occupations: [
            {
                text: {
                    en: "Administrative Assistant",
                    es: "Asistente administrativo",
                },
                value: "Administrative Assistant",
            },
            {
                text: {
                    en: "Air Traffic Control",
                    es: "Control de tráfico aéreo",
                },
                value: "Air Traffic Control",
            },
            {
                text: {
                    en: "Airport Operations Crew",
                    es: "Tripulación de operaciones del aeropuerto",
                },
                value: "Airport Operations Crew",
            },
            {
                text: {
                    en: "Bellhop/Porter",
                    es: "Botones / Portero",
                },
                value: "Bellhop/Porter",
            },
            {
                text: {
                    en: "Clerk",
                    es: "Empleado",
                },
                value: "Clerk",
            },
            {
                text: {
                    en: "Crane Loader/Operator",
                    es: "Cargador / Operador de grúa",
                },
                value: "Crane Loader/Operator",
            },
            {
                text: {
                    en: "Dispatcher",
                    es: "Despachador",
                },
                value: "Dispatcher",
            },
            {
                text: {
                    en: "Driver-Bus/Streetcar",
                    es: "Conductor de autobús / Tranvía",
                },
                value: "Driver-Bus/Streetcar",
            },
            {
                text: {
                    en: "Driver-Taxi/Limo",
                    es: "Conductor de taxi / limusina",
                },
                value: "Driver-Taxi/Limo",
            },
            {
                text: {
                    en: "Driver-Truck/Delivery",
                    es: "Conductor de camión / Entrega",
                },
                value: "Driver-Truck/Delivery",
            },
            {
                text: {
                    en: "Flight Attendant",
                    es: "Asistente de vuelo",
                },
                value: "Flight Attendant",
            },
            {
                text: {
                    en: "Laborer",
                    es: "Trabajador",
                },
                value: "Laborer",
            },
            {
                text: {
                    en: "Longshoreman",
                    es: "Estibador",
                },
                value: "Longshoreman",
            },
            {
                text: {
                    en: "Manager-Warehouse/District",
                    es: "Gerente-Almacén / Distrito",
                },
                value: "Manager-Warehouse/District",
            },
            {
                text: {
                    en: "Mate/Sailor",
                    es: "Compañero / Marinero",
                },
                value: "Mate/Sailor",
            },
            {
                text: {
                    en: "Parking Lot Attendant",
                    es: "Asistente de estacionamiento",
                },
                value: "Parking Lot Attendant",
            },
            {
                text: {
                    en: "Pilot/Captain/Engineer",
                    es: "Piloto / Capitán / Ingeniero",
                },
                value: "Pilot/Captain/Engineer",
            },
            {
                text: {
                    en: "Railroad Worker",
                    es: "Trabajador ferroviario",
                },
                value: "Railroad Worker",
            },
            {
                text: {
                    en: "Receptionist/Secretary",
                    es: "Recepcionista / Secretaria",
                },
                value: "Receptionist/Secretary",
            },
            {
                text: {
                    en: "Shipping/Receiving Clerk",
                    es: "Empleado de envío / recepción",
                },
                value: "Shipping/Receiving Clerk",
            },
            {
                text: {
                    en: "Subway/Light Rail Operator",
                    es: "Operador de metro / tren ligero",
                },
                value: "Subway/Light Rail Operator",
            },
            {
                text: {
                    en: "Ticket Agent",
                    es: "Agente de boletos",
                },
                value: "Ticket Agent",
            },
            {
                text: {
                    en: "Transportation Specialist",
                    es: "Especialista en transporte",
                },
                value: "Transportation Specialist",
            },
            {
                text: {
                    en: "Travel Agent",
                    es: "Agente de viajes",
                },
                value: "Travel Agent",
            },
            {
                text: {
                    en: "Other",
                    es: "Otro",
                },
                value: "Other",
            },
        ]
    },
    {
        text: {
            en: "Unemployed",
            es: "Desempleado",
        },
        value: "Unemployed",
        Occupations: [
            {
                text: {
                    en: "Unemployed",
                    es: "Desempleado",
                },
                value: "Unemployed",
            },
        ]
    },

]

export default function (props) {
    const ref = useRef(null)
    const [industryValue, setIndustryValue] = useState(props.defaultValue ? props.defaultValue[0] : "");
    const [showOccupation, setShowOccupation] = useState(false);
    const [occupationValue, setOccupationValue] = useState(props.defaultValue ? props.defaultValue[1] : "");

    const [completeValue, setCompleteValue] = useState([industryValue, occupationValue]);
    const [isValid, setIsValid] = useState(false);

    function handleIndustryChange(value) {
        setIndustryValue(value);
        setShowOccupation(true);
    }
    function handleOccupationChange(value) {
        setOccupationValue(value);
        props.addIdToList(props.nextQuestionId);
    }

    function handleValueChange() {
        const newCompleteValue = [industryValue, occupationValue];
        setCompleteValue(newCompleteValue);
        return newCompleteValue;
    }
    function isValidHandler() {
        if (industryValue !== "" && occupationValue !== "") {
            setIsValid(true);
            return true;
        }
        setIsValid(false);
        return false;
    }
    useEffect(() => {
        const newValue = handleValueChange();
        props.setFormValue(`${props.questionId}`, newValue);
        props.updateFormValues(props.id, [{ questionId: "Industry", value: newValue[0] }, { questionId: "Occupation", value: newValue[1] }])
    }, [industryValue, occupationValue])

    useEffect(() => {
        props.register(`${props.questionId}`, { value: completeValue });
    }, [])

    useEffect(() => {
        if (props.defaultValue) {
            handleIndustryChange(props.defaultValue[0]);
            handleOccupationChange(props.defaultValue[1]);
        }
    }, [])
    return <>
        <Box
            sx={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", margin: "1rem auto" }}
        >
            <Typography sx={{ whiteSpace: "nowrap" }} variant="h6" >{returnLocaleText(props.question)}</Typography>
            <Box
                sx={{
                    display: "flex", gap: "1rem", justifyContent: "space-around",
                    width: props.fullWidth ? { xs: "100%", md: '49%' } : "100%"
                }}
            >
                <FormControl fullWidth
                >
                    <InputLabel id={`month-label-${props.questionId}`}>{returnLocaleText(TEXT.industry)}</InputLabel>
                    <Select
                        value={industryValue}
                        onChange={(e) => {
                            handleIndustryChange(e.target.value)
                        }}
                        ref={ref}
                        onBlur={() => {

                        }}
                        label={returnLocaleText(TEXT.industry)}
                    >
                        {WorkSelectOptions.map((occupation, index) => {
                            return <MenuItem key={index} value={occupation.value}>{returnLocaleText(occupation.text)}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl fullWidth
                >
                    <InputLabel id={`day-label-${props.questionId}`}>{returnLocaleText(TEXT.occupation)}</InputLabel>
                    <Select
                        disabled={!showOccupation}
                        value={occupationValue}
                        onChange={(e) => {
                            handleOccupationChange(e.target.value)
                        }}
                        label={returnLocaleText(TEXT.occupation)}
                    >
                        {WorkSelectOptions.find((occupation) => occupation.value === industryValue)?.Occupations.map((occupation, index) => {
                            return <MenuItem key={index} value={occupation.value}>{returnLocaleText(occupation.text)}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    </>
}