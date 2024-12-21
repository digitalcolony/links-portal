import { defineCollection, z } from "astro:content";

interface LinkData {
	active: string;
	name: string;
	url: string;
	description: string;
}

const links = defineCollection({
	loader: async () => {
		try {
			const url = import.meta.env.SECRET_GOOGLE_SHEET_LINK;
			const response = await fetch(url);
			if (!response.ok) {
				console.error("Failed to fetch links:", response.statusText);
				return [];
			}
			const { data } = await response.json();
			console.log(`Fetched ${data.length} links`);
			return data.map((link: LinkData, index: number) => ({
				id: index.toString(),
				active: link.active === "TRUE",
				name: link.name,
				url: link.url,
				description: link.description,
			}));
		} catch (error) {
			console.error("Error fetching links:", error);
			return [];
		}
	},
	schema: z.object({
		id: z.string(),
		active: z.boolean(),
		name: z.string(),
		url: z.string(),
		description: z.string(),
	}),
});

export const collections = { links };
