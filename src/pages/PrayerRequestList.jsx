import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from "axios";
import Table from "react-bootstrap/Table";

const PrayerRequestList = () => {
    const [getDateRange, setDateRange] = useState({
        from:"",
        to:""
    });
    const [getPrayerReqList, setPrayerReqList] = useState([]);
    const dateChangeHandler = (event, prop) => {
        const dateRange = getDateRange;
        dateRange[prop] = event.target.value;
        setDateRange(dateRange);
        if(dateRange.from !== "" && dateRange.to !== "" &&
            new Date(dateRange.to).getTime() - new Date(dateRange.from).getTime() > 0) {
            axios.post('https://hvmatl-backend.herokuapp.com/authentication', {
                username: 'anonymous',
                password: 'anonymous'
            }).then(auth => {
                axios.get('https://hvmatl-backend.herokuapp.com/prayerRequest', {
                    headers: {
                        'Authorization': `Bearer ${auth.data.token}`,
                    },
                    params: dateRange
                }).then((result) => {
                    setPrayerReqList(result.data);
                });
            });
        }
    }

    return (
        <div>
            <Header/>
            <div className="contact-form section-padding-0-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h2>Prayer Request List</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="fromDate">From</label>
                                <input className="form-control" type="date" onChange={(e) => dateChangeHandler(e, "from")} id="from"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="toDate">To</label>
                                <input className="form-control" type="date" onChange={(e) => dateChangeHandler(e, "to")} id="to"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>MemberID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Mass Date</th>
                                        <th>Mass Time</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    getPrayerReqList.map((record, index) => {
                                        return(
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{record.memberId}</td>
                                                <td>{record.name}</td>
                                                <td>{record.email}</td>
                                                <td>{record.phone}</td>
                                                <th>{new Date(record.massDate).toLocaleDateString()}</th>
                                                <th>{record.massTime}</th>
                                                <td>{record.message}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PrayerRequestList;