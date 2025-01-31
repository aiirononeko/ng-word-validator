enum Category {
	violate = "violate",
}

enum Severity {
	one = 1,
}

export interface NgWord {
	word: string;
	category: Category;
	severity: Severity;
}
