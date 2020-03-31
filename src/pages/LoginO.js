import React from "react"
import { Link } from "gatsby"
import styles from "../css/LoginO.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Login from '../components/Login'
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Login />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
