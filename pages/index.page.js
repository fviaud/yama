import Link from 'next/link'
import { Layout } from "components"


const home = () => {
    return (<Layout>
        <Link href={`/films`}>
            <a>films</a>
        </Link>

    </Layout>)
}

export default home