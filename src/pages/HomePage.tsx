import {Container, Grid} from '@mantine/core';
import classes from './HomePage.module.css';

function HomePage() {
    return (
        <>
            <Container size="md" className={classes.homeContainer}>
                <Grid columns={10} className={classes.homeGrid}>

                    {/*Hello, World*/}
                    <Grid.Col span={4}>
                        <div className={classes.helloWorld}>
                            <h1>
                                Hello, World!
                            </h1>
                        </div>
                    </Grid.Col>

                    {/*Name, Professional Description*/}
                    <Grid.Col span={6}>
                        <div className={classes.aboutMe}>
                            <h1>
                                Name
                            </h1>
                            <h2>
                                Professional Description
                            </h2>
                        </div>
                    </Grid.Col>

                    {/*Project Carousel*/}
                    <Grid.Col span={10}>
                        <div className={classes.projectCarousel}>
                            <h1>
                                Project Carousel
                            </h1>
                        </div>
                    </Grid.Col>

                </Grid>
            </Container>
        </>
    )
}

export default HomePage;
