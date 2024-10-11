import { File } from "lucide-react";

import { Button } from "./button";

import { GroundingFile as GroundingFileType } from "@/types";

type Properties = {
    value: GroundingFileType;
    onClick: () => void;
};

export default function GroundingFile({ value, onClick }: Properties) {
    return (
        <Button variant="outline" size="sm" className="rounded-full text-darkGreen border-darkGreen hover:bg-golden hover:text-black" onClick={onClick}>
            <File className="mr-2 h-4 w-4 text-darkGreen" /> {/* Updated icon color */}
            {value.name}
        </Button>
    );
}
