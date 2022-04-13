import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { workType } from '../data/work'
import styles from '../styles/Home.module.css'
import Atmosphere from './src/components/atmosphere'
import Breadcrumb from './src/components/breadcrumb'
import Footer from './src/components/footer'
import Header from './src/components/header'
import Ourwork from './src/components/ourwork'
import Team from './src/components/team'

const Home: NextPage<workType> = (props) => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Ourwork workdata={props} />
      <Team />
      <Atmosphere />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: {
      data: [
        { "id": 1, "title": "งานบริหารงานวิจัย", "detail" : "งานสารบรรณระดับงาน,งานทำสัญญา,งานเปิดบัญชี,งานตรวจติดตามงานวิจัย, ..."  },
        { "id": 2, "title": "งานพัฒนาโจทย์วิจัย", "detail" : "งานผู้ประกอบการ , งานชุมชน , งานยื่นขอทุน , งานหาแหล่งทุน , งานแผนงานวิจัย"  },
        { "id": 3, "title": "งานจริยธรรมงานวิจัยในมนุษย์", "detail" : "งาน SOPs , งานประชุม , งานข้อเสนอโครงการ"  },
        { "id": 4, "title": "งานใช้สัตว์ทดลองทางวิทยาศาสตร์", "detail" : "งาน SOPs , งานประชุม , งานข้อเสนอโครงการ , งานพิษจากสัตว์"  },
      ]
    }
  }
}

export default Home
