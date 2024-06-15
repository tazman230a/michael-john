import { Body, Container, Head, Heading, Hr, Html, Preview, Tailwind } from "@react-email/components"
import { OrderInformation } from "./components/OrderInformation"
import React from "react"

type OrderHistoryEmailProps = {
    orders: {
        id: string
        pricePaidInCents: number
        createdAt: Date
        downloadVerificationId: string
        product: {
            name: string
            imagePath: string
            description: string
        }
    }[]
}

OrderHistoryEmail.PreviewProps = {
    orders: [
        {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            pricePaidInCents: 10000,
            downloadVerificationId: crypto.randomUUID(),
            product: {
                name: "Headphone",
                description: "Headphone",
                imagePath:
                    "/products/2773eaf0-f719-4cce-8375-53ddb4813fae-product 6.jpg",
            },
        },
        {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            pricePaidInCents: 20000,
            downloadVerificationId: crypto.randomUUID(),
            product: {
                name: "Watch",
                description: "Watch",
                imagePath:
                    "/products/dbd5f783-1f30-4c24-aab1-97105dc438ca-22-1-270x338.jpg",
            },
        },
    ],
} satisfies OrderHistoryEmailProps

export default function OrderHistoryEmail({ orders }: OrderHistoryEmailProps) {
    return (
        <Html>
            <Preview>Order History & Downloads</Preview>
            <Tailwind>
                <Head />
                <Body className="font-sans bg-white">
                    <Container className="max-w-xl">
                        <Heading>Order History</Heading>
                        {orders.map((order, index) => (
                            <React.Fragment key={order.id}> 
                                <OrderInformation                                 
                                    order={order}
                                    product={order.product}
                                    downloadVerificationId={order.downloadVerificationId}
                                />
                                {index < orders.length - 1 && <Hr />}
                            </React.Fragment>
                        ))}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}