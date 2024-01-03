import { json } from "@sveltejs/kit";

export function GET() {
    const responseBody = {
        status: 500,
        name: 'koke'
    }

    return json(responseBody);
}