import Navbar from '../../components/navbar/Navbar';
import React from 'react'
import DonationSuccess from '../../components/Paymentsuccess'
import Footer from '../../components/Footer/footer';
import mongoose from 'mongoose';
import Donation from '../../userModel/Payment';

const order = (props) => {
    console.log(props, "op op rpops");
    return (
        <>
            <Navbar />
            <DonationSuccess props={props} />
            <Footer />
        </>
    )
}

export default order

export async function getServerSideProps(context) {
    console.log(context.query)
    let slug = context.query.id;
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect('mongodb+srv://anubhavgu2002:anubhav14@mernauth.egcwxzx.mongodb.net/mernauth?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    console.log(slug, "slug");

    let doc = await Donation.findOne({ order_id: slug });
    console.log(doc, "title");

    // Ensure you return the data as props within an object
    return {
        props: {
            data: JSON.parse(JSON.stringify(doc))
        }
    }
}
