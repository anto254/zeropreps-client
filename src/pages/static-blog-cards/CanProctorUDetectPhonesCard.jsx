import React from 'react';
import { Card, Image, Text } from "@mantine/core";
import cardImage from '../../assets/graphics/article4.jpg'
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from "react-icons/hi";


function CanProctorUDetectPhonesCard() {
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
                        alt="Can ProctorU Detect Phones?"
                        className="h-[150px] w-full "
                        loading="lazy"
                    />
                </Card.Section>

                <Text size="sm" color="#ffd700">
                    <h1>Can ProctorU Detect Phones?</h1>
                </Text>
                <Text size="sm" color="dimmed">
                    With the increase in online learning and the prevalence of cheating nowadays, proctoring companies have come up with sophisticated ways to curb the vice. One of these companies, ProctorU, employs various methods to prevent cheating incidents. 
                </Text>

                <Link to={`/blog/can-proctoru-detect-phones`}>
                    <div className="flex  items-center gap-2 cursor-pointer  ">
                        <h1 className="text-primary ">Read more </h1>
                        <HiOutlineArrowSmRight color="#ffd700" size={20} />
                    </div>
                </Link>
            </Card>
        </div>
    )
}

export default CanProctorUDetectPhonesCard