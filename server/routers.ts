import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createLead, getLeads } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Lead management router
  leads: router({
    submit: publicProcedure
      .input(
        z.object({
          firstName: z.string().min(1, "First name is required"),
          lastName: z.string().min(1, "Last name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().min(10, "Valid phone number is required"),
          city: z.string().optional(),
          zipCode: z.string().optional(),
          isFirstTimeBuyer: z.enum(["yes", "no"]).optional(),
          isMilitaryVeteran: z.enum(["yes", "no"]).optional(),
          isFirstResponderHealthcareEducation: z.enum(["yes", "no"]).optional(),
          householdSize: z.number().optional(),
          ownedHomeInLast3Years: z.enum(["yes", "no"]).optional(),
          monthlyHouseholdIncome: z.number().optional(),
          purchasePriceRange: z.string().optional(),
          monthlyRentOrMortgage: z.number().optional(),
          monthlyDebtObligations: z.number().optional(),
          creditScore: z.string().optional(),
          source: z.string().default("website"),
        })
      )
      .mutation(async ({ input }) => {
        const lead = await createLead(input);
        
        // Notify owner of new lead
        await notifyOwner({
          title: "New Down Payment Assistance Lead",
          content: `Name: ${input.firstName} ${input.lastName}\nEmail: ${input.email}\nPhone: ${input.phone}\nFirst-time buyer: ${input.isFirstTimeBuyer || "N/A"}\nMilitary/Veteran: ${input.isMilitaryVeteran || "N/A"}\nFirst Responder/Healthcare/Education: ${input.isFirstResponderHealthcareEducation || "N/A"}\nHousehold Size: ${input.householdSize || "N/A"}\nOwned Home in Last 3 Years: ${input.ownedHomeInLast3Years || "N/A"}\nMonthly Income: $${input.monthlyHouseholdIncome || "N/A"}\nPurchase Price Range: ${input.purchasePriceRange || "N/A"}\nMonthly Rent/Mortgage: $${input.monthlyRentOrMortgage || "N/A"}\nMonthly Debt: $${input.monthlyDebtObligations || "N/A"}\nCredit Score: ${input.creditScore || "N/A"}`,
        });
        
        return lead;
      }),
    
    list: protectedProcedure.query(async () => {
      return await getLeads();
    }),
  }),
});

export type AppRouter = typeof appRouter;
