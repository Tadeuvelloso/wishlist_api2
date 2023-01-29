import Joi from "joi";

export const movieSchema = Joi.object({
    genre: Joi.string().required(),
	name: Joi.string().required(),
	platform: Joi.string().required(),
	description: [Joi.string().optional(), Joi.allow(null)],
	watched: Joi.boolean().required(),
	entity: Joi.string().required()
})