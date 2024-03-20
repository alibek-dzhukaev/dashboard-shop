import {useEffect} from "react";
import {DashboardService} from "../services/DashboardService.ts";

export const useDashboardService = () => {
    useEffect(() => {
        return () => {
            DashboardService.destroyed()
        }
    }, []);

    return DashboardService.created()
}