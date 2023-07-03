import React from 'react';
import { Card, Image, Text } from "@mantine/core";
import cardImage from '../../assets/graphics/article3.jpg'
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from "react-icons/hi";


function CanProctoruSeeMyScreenCard() {
    return (
        <div>
            <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="bg-dark border h-[400px] border-secondary flex flex-col gap-2"
            >
                <Card.Section>
                    <img
                        src={cardImage}
                        alt="Can ProctorU See My Screen?"
                        className="h-[150px] w-full "
                        loading="lazy"
                    />
                </Card.Section>

                <Text size="sm" color="#ffd700">
                    <h1>Can ProctorU See My Screen?</h1>
                </Text>
                <Text size="sm" color="dimmed">
                    As an integral part of online proctoring for exams, ProctorU requires screen sharing to be enabled. This allows them to monitor the test-taker's activities throughout the duration of the exam. Consequently, the proctors are able to see your screen and ensure the integrity of the exam process.
                    </Text>

                <Link to={`/blog/can-proctoru-see-my-screen`}>
                    <div className="flex  items-center gap-2 cursor-pointer  ">
                        <h1 className="text-primary ">Read more </h1>
                        <HiOutlineArrowSmRight color="#ffd700" size={20} />
                    </div>
                </Link>
            </Card>
        </div>
    )
}

export default CanProctoruSeeMyScreenCard