import { Box } from "@mui/material"
import InputQuestion from "./InputQuestion"
import SelectQuestion from "./SelectQuestion"
import DateQuestion from "./DateQuestion"
import WorkSelect from "./WorkSelect"
import VehicleSelect from "./VehicleSelect"
import ButtonQuestion from "./ButtonQuestion"
import PriorInsuranceQuestion from "./PriorInsuranceQuestion"
import CoverageQuestion from "./CoverageQuestion"
export default function (props) {
    return <>
        <Box
            sx={{ width: "50%", margin: "1rem auto" }}
        >
            {props.type.toLowerCase() === "input" && <>
                <InputQuestion  {...props} />
            </>}
            {props.type.toLowerCase() === "select" && <>
                <SelectQuestion  {...props} />
            </>}
            {props.type.toLowerCase() === "date" && <>
                <DateQuestion  {...props} />
            </>}
            {props.type.toLowerCase() === "work-select" && <>
                <WorkSelect  {...props} />
            </>}
            {props.type.toLowerCase() === "vehicle" && <>
                <VehicleSelect  {...props} />
            </>}
            {props.type.toLowerCase() === "button" && <>
                <ButtonQuestion  {...props} />
            </>}
            {props.type.toLowerCase() === "prior-insurance" && <>
                <PriorInsuranceQuestion  {...props} />
            </>}
            {props.type.toLowerCase() === "coverage" && <>
                <CoverageQuestion  {...props} />
            </>}
        </Box>
    </>
}