import {z} from 'zod';
import {openai} from "@ai-sdk/openai";
import {NextRequest, NextResponse} from "next/server";
import {generateObject} from "ai";

const expertQuestionSchema = z.object({
    query: z.string(),
    expert: z.string()
})

export async function POST(req: NextRequest) {
    const body = await req.json();
    const parsedBody = expertQuestionSchema.safeParse(body)

    if (!parsedBody.success) {
        return NextResponse.json({msg: 'something went wrong'}, {status: 411})
    }

    const {expert, query} = parsedBody.data

    try {

        const {object} = await generateObject({
            model: openai("gpt-4o"),
            schema: z.object({
                answer: z.string()
            }),
            prompt: `You are ${expert}. Please answer questions for your area of specialization. For anything else reply you do not know.

${query}
`,
        });

        return NextResponse.json(object, {status: 200});
    } catch (err) {
        return NextResponse.json({msg: 'something went wrong'}, {status: 500})
    }
}