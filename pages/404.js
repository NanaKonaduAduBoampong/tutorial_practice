import Link from "next/link";
import Image from 'next/image';
import { useEffect } from "react";
import { useRouter } from "next/router"


const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout( () => {
            router.push("/");
        }, 3000)
    }, [])

    return ( 
        <div className="error-content">
            <Image src="/images/404.jpg" width={960} height={550} />
            <h1>Page Not Found🥲: 404</h1>
            <p >Go back to the: <Link href="/"><a className="text">Homepage</a></Link></p>
        </div>
       
     );
}
 
export default NotFound;