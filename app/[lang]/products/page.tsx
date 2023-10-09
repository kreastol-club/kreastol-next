import {Locale} from "@/i18n.config";
import Stripe from 'stripe';
import Image from "next/image";
import Link from "next/link";

type Product = {
    data: Stripe.Product;
    paymentLink: string;
}

export default async function Products({params: {lang}}: { params: { lang: Locale } }) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-08-16',
    });

    const products = await stripe.products.list();

    return (
        <div>
            <div className='flex flex-wrap gap-2'>
                {
                    products.data.filter((p) => p).map((p) => {
                        // console.log(p)
                        return <>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={p.images[0]} alt="Shoes"/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{p.name}</h2>
                                    <p>{p.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link className='btn btn-primary' href={''}>Buy Now</Link>
                                    </div>
                                    <div className="justify-start">
                                        <p>Price</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    );
}
