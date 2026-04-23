import { NextResponse } from "next/server";

type ContactPayload = {
  company?: string;
  name?: string;
  email?: string;
  challenge?: string;
  objective?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const company = body.company?.trim() ?? "";
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const challenge = body.challenge?.trim() ?? "";
    const objective = body.objective?.trim() ?? "";

    if (!company || !name || !email || !challenge || !objective) {
      return NextResponse.json(
        { message: "未入力項目があります。すべての必須項目をご入力ください。" },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "メールアドレス形式が正しくありません。" }, { status: 400 });
    }

    if (challenge.length < 20 || objective.length < 20) {
      return NextResponse.json(
        { message: "課題と相談内容は、それぞれ20文字以上で入力してください。" },
        { status: 400 },
      );
    }

    // TODO: Connect this payload to your CRM or notification workflow.
    console.info("[contact-inquiry]", {
      company,
      name,
      email,
      challenge,
      objective,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "送信を受け付けました。内容確認後、2営業日以内にご連絡します。",
    });
  } catch {
    return NextResponse.json(
      { message: "送信データの形式が正しくありません。入力内容をご確認ください。" },
      { status: 400 },
    );
  }
}
