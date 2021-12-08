import { EToVisitStatus } from ".prisma/client";

export interface IToVisit{
    id?: string,
    user: string,
    countryName: string,
    status: EToVisitStatus,
    createdAt: Date,
    updatedAt: Date
}