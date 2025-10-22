CREATE TABLE `leads` (
	`id` varchar(64) NOT NULL,
	`firstName` varchar(100) NOT NULL,
	`lastName` varchar(100) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`city` varchar(100),
	`zipCode` varchar(10),
	`isFirstTimeBuyer` varchar(3),
	`estimatedIncome` varchar(50),
	`estimatedCreditScore` varchar(50),
	`source` varchar(50) DEFAULT 'website',
	`status` enum('new','contacted','qualified','closed','archived') NOT NULL DEFAULT 'new',
	`notes` text,
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
