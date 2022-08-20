import {RobotNameSingleton} from "./robot-name-singleton";

export class Robot {
    private robotName: string;

    constructor() {
        this.robotName = RobotNameSingleton.getInstance().resetName();
    }

    public get name(): string {
        return this.robotName;
    }

    public resetName(): void {
        this.robotName = RobotNameSingleton.getInstance().resetName();
    }

    public static releaseNames(): void {
        RobotNameSingleton.releaseName(this.name);
    }
}
