import type { NextPage } from 'next'
import Head from 'next/head'
import { titleConfig } from '../../../../config/title'

const SEO: NextPage = () => {
    return (
        <>
            <Head>
                <title>{titleConfig.NameWeb}</title>
                <meta name="description" content={`${titleConfig.NameWeb}`} />
                <link rel="icon" href="./irdrmuti.gif" />
                <link rel="apple-touch-icon" href="./irdrmuti.gif" />


                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1" />


                <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="template/fontawesome-free/css/all.min.css" />

                <link rel="stylesheet" href="template/vendor/css/slick.css" />
                <link rel="stylesheet" href="template/vendor/css/animate.css" />
                <link rel="stylesheet" href="template/vendor/css/venobox.min.css" />
                <link rel="stylesheet" href="template/styles/bootstrap.min.css" />
                <link rel="stylesheet" href="template/styles/main.css" />

                <script async src="template/scripts/jquery-3.5.1.min.js" />
                <script async src="template/scripts/popper.min.js" />
                <script async src="template/scripts/bootstrap.min.js" />

                <script async src="template/vendor/js/wow.min.js" />
                <script async src="template/vendor/js/slick.min.js" />
                <script async src="template/vendor/js/venobox.min.js" />
                <script async src="template/vendor/js/jquery.counterup.min.js" />
                <script async src="template/vendor/js/waypoints.min.js" />

                <script async src="template/scripts/main.js" />
            </Head>
        </>
    )
}

export default SEO
