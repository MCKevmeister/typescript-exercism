export class RobotNameSingleton {
    private static instance: RobotNameSingleton;
    private robotNames: Set<string> = new Set();

    private constructor() {
    }

    public static getInstance(): RobotNameSingleton {
        if (!RobotNameSingleton.instance) {
            RobotNameSingleton.instance = new RobotNameSingleton();
        }
        return RobotNameSingleton.instance;
    }

    public resetName(): string {
        return this.generateName();
    }

    private generateName(): string {
        let generatedName = '';

        generatedName = this.randomLetter() + this.randomLetter() + this.randomNumber() + this.randomNumber() + this.randomNumber();
        if (!this.robotNames.has(generatedName)) {
            this.robotNames.add(generatedName);
            return generatedName;
        }
        return this.generateName();
    }

    public static releaseName(RobotName:string): void {
        this.getInstance().robotNames.delete(RobotName);
    }

    private randomLetter(): string {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return letters.charAt(Math.floor(Math.random() * letters.length));
    }

    private randomNumber(): string {
        return Math.floor(Math.random() * 10).toString();
    }
}
