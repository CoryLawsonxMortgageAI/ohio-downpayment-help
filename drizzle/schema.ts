import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  id: varchar("id", { length: 64 }).primaryKey(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Leads table for down payment assistance inquiries
export const leads = mysqlTable("leads", {
  id: int("id").primaryKey().autoincrement(),
  firstName: varchar("firstName", { length: 255 }).notNull(),
  lastName: varchar("lastName", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  city: varchar("city", { length: 255 }),
  zipCode: varchar("zipCode", { length: 255 }),
  
  // Qualification questions
  isFirstTimeBuyer: mysqlEnum("isFirstTimeBuyer", ["yes", "no"]),
  isMilitaryVeteran: mysqlEnum("isMilitaryVeteran", ["yes", "no"]),
  isFirstResponderHealthcareEducation: mysqlEnum("isFirstResponderHealthcareEducation", ["yes", "no"]),
  householdSize: int("householdSize"),
  ownedHomeInLast3Years: mysqlEnum("ownedHomeInLast3Years", ["yes", "no"]),
  
  // Financial information
  monthlyHouseholdIncome: int("monthlyHouseholdIncome"),
  estimatedIncome: varchar("estimatedIncome", { length: 255 }),
  purchasePriceRange: varchar("purchasePriceRange", { length: 255 }),
  monthlyRentOrMortgage: int("monthlyRentOrMortgage"),
  monthlyDebtObligations: int("monthlyDebtObligations"),
  creditScore: varchar("creditScore", { length: 255 }),
  estimatedCreditScore: varchar("estimatedCreditScore", { length: 255 }),
  
  // Metadata
  source: varchar("source", { length: 255 }),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
