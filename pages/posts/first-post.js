import {useState} from "react";
import cn from "classnames";

import Link from 'next/link'
import Image from "next/image";
import Head from "next/head";

import Layout from "../components/layout";
import utilStyles from "../../styles/utils.module.scss"

// import testImage from "../../public/images/test.png"


export default function FirstPost() {

    const [formInput1, setFormInput1] = useState('test');

    function test(e) {
        setFormInput1(e.target.value);
        // console.log(e.target.value)
    }

    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <p className={ cn({
                [utilStyles.success]: formInput1==='test'
            })}>
                test
            </p>
            <input type={'text'} onChange={test} value={formInput1}/>
            <img src="/images/profile.jpg" alt="test"/>
            <Image src={'/images/test.png'} height={144} width={144} alt={'test-x'}/>
        </Layout>
    )
}
