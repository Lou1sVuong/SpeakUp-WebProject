import React from 'react';
import styles from './PricingPlan.module.css';
import Check from '../../../Assets/ComponentSVG/Check';
import Button from '../../Common/Button/Button';
import { dataBasicCourse, dataPremiumCourse, teamData } from './PricingData';
import clsx from 'clsx';

function PricingPlan() {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.heading}>
                    <h1>Pricing Plan</h1>
                    <p>Choose the right pricing for you and get started</p>
                </div>
                <div className={styles.content}>
                    {dataBasicCourse.map((course, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.headingCard}>
                                <h2>{course.title}</h2>
                                <p>{course.desc}</p>
                            </div>
                            <div className={styles.price}>
                                <h4>{course.price}</h4>
                            </div>
                            <div className={styles.list}>
                                {course.benefits.map((benefit, idx) => (
                                    <div key={idx} className={styles.row}>
                                        <Check />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <Button nofillPrimary>Get Started</Button>
                        </div>
                    ))}
                    {dataPremiumCourse.map((course, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.headingCard}>
                                <h2>{course.title}</h2>
                                <p>{course.desc}</p>
                            </div>
                            <div className={clsx(styles.price , styles.premium)}>
                                <h4>{course.price}</h4>
                            </div>
                            <div className={styles.list}>
                                {course.benefits.map((benefit, idx) => (
                                    <div key={idx} className={styles.row}>
                                        <Check />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <Button primary>Get Started</Button>
                        </div>
                    ))}
                    {teamData.map((course, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.headingCard}>
                                <h2>{course.title}</h2>
                                <p>{course.desc}</p>
                            </div>
                            <div className={styles.price}>
                                <h4>{course.price}</h4>
                            </div>
                            <div className={styles.list}>
                                {course.benefits.map((benefit, idx) => (
                                    <div key={idx} className={styles.row}>
                                        <Check />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <Button nofillPrimary>Get Started</Button>
                        </div>
                    ))}
               
                </div>
            </div>
        </div>
    );
}

export default PricingPlan;
