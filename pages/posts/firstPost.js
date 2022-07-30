import Head from "next/head";
import Link from "next/link";

export default function FirstPost () {
    return (
        <div>
            <Head> 最初の投稿
                <h1>タイトル h1</h1>
                <Link href="/"> 戻る </Link>
            </Head>
        </div>
    );
}