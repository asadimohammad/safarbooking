//carousels/Bootstrap.js
import { useState } from "react";
import { items } from "../../public/sliderItems.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "bootstrap/dist/css/bootstrap.min.css";


export default function BootstrapCarousel() {
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} prevLabel={null} nextLabel={null} onSelect={handleSelect}>
            {bootstrap.map((item) => (
                <Carousel.Item
                    key={item.id}
                    className={styles.itemP}
                    interval={4000}
                >
                    <img src={item.imageUrl} alt="slides" className="d-block w-100"/>
                    <Carousel.Caption className={styles.caption}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
