export class DashboardService {
    private static instance: DashboardService | null


    public static created(): DashboardService {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

    public static destroyed(): void {
        if (this.instance) {
            this.instance = null
        }
    }
}