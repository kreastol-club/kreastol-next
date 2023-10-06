import Image from "next/image";

export type Tag = {
    displayText: string;
}

export type Product = {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    isNew: boolean;
    tags: Tag[];
}

export default function Product({product}: { product: Product }) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><Image src={product.imgSrc} alt={product.imgAlt}/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    {
                        product.tags.map((tag) => (
                            <>
                                <div className="badge badge-outline">{tag.displayText}</div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
