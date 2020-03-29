import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Forms = () => {
    return (
        <div>
            <Header/>
            <h3 style={{"text-align": "center"}}><br/><br/> Đơn Từ - Dùng Trong Giáo Xứ<br/></h3>
            <table className="tablecontrol">
                <thead>
                <tr>
                    <th>File Name</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Application for Advance Payment (<a href="pdf/forms/AdvancedRequestForm.pdf"
                                                            style={{"color": "#3e48e2"}}>PDF</a>)
                    </td>
                    <td style={{"color": "#B18904"}}>Đơn xin bảo lãnh tiền tạm ứng <br/><br/>
                        Application for advance payment guarantee
                    </td>
                </tr>
                <tr>
                    <td>Check Request Form (<a href="pdf/forms/CheckRequestForm.pdf" style={{"color": "#3e48e2"}}>PDF</a>/<a
                        href="pdf/forms/CheckRequest.xls" style={{"color": "#3e48e2"}}>XLS</a>)
                    </td>
                    <td style={{"color": "#B18904"}}>Yêu cầu hoàn trả chi tiêu, thiện nguyện viên / ngân phiếu <br/><br/>
                        Reimbursement request.<br/>
                        <a href="pdf/forms/SampleCheckRequest.pdf" style={{"color": "#3e48e2"}}>Thí dụ(Example)</a>
                    </td>
                </tr>
                <tr>
                    <td>Detailed Income Remittance (<a href="pdf/forms/FormNewDetailedIncomeRemittanceForm.pdf"
                                                       style={{"color": "#3e48e2"}}>PDF</a>/<a
                        href="pdf/forms/IncomeRemittanceForm.xls" style={{"color": "#3e48e2"}}>XLS</a>)
                    </td>
                    <td style={{"color": "#B18904"}}> Dùng mẫu này khi thu nhận tiền những dịp như ghi danh lớp học, cắm trại,
                        đi chơi, vv.<br/><br/>
                            Use this form to keep track of cash/checks received for events such as school registration
                            fees, field trips, baptism, retreats etc. <br/>
                            <a href="pdf/forms/SampleDetailedIncomeRemittanceForm.pdf" style={{"color": "#3e48e2"}}>Thí
                                dụ(Example)</a>
                        </td>
                </tr>
                <tr>
                    <td>Financial Compliance (<a href="pdf/forms/Guideline_Finance_Internal_Control.pdf"
                                                 style={{"color": "#3e48e2"}}>PDF</a>)
                    </td>
                    <td style={{"color": "#B18904"}}>Đáp ứng hướng dẫn tài chính <br/><br/>
                        Guideline for Finance Compliance.
                    </td>
                </tr>
                <tr>
                    <td>Form Address Change (<a href="pdf/forms/FormAddressChange.pdf" style={{"color": "#3e48e2"}}>PDF</a>)
                    </td>
                    <td style={{"color": "#B18904"}}>Đơn thay đổi địa chỉ <br/><br/>
                        Address change request
                    </td>
                </tr>
                <tr>
                    <td>General Income Remittance Form (<a href="pdf/forms/GeneralIncomeRemittanceForm.xls"
                                                           style={{"color": "#3e48e2"}}>XLS</a>)
                    </td>
                    <td style={{"color": "#B18904"}}>Dùng mẫu này để báo cáo những thu nhận không cần chi tiết. <br/><br/>
                        Use this form to remit income/cash received when it is not necessary to keep a record of
                        individual payees, and where all income/cash being transmitted are for the same purpose
                    </td>

                </tr>
                <tr>
                    <td>Kitchen Food Request Form (<a href="pdf/forms/KitchenFoodRequestForm.xls"
                                                      style={{"color": "#3e48e2"}}>XLS</a>)
                    </td>
                    <td style={{"color": "#B18904"}}>Đơn yêu cầu nhà bếp giúp thức ăn cho các buổi họp, tĩnh tâm, huấn luyện,
                        vân vân tại cơ sở Họ Đạo. Ban nhà bếp sẽ làm thực đơn theo phương tiện của nhà bếp, và ban
                        nhà bếp có thể từ chối nếu không thuận tiện. Tất cả các yêu cầu liên quan đến nhà bếp cần thông
                        qua Khối Tài Chánh một tuần trước. <br/><br/>
                            This form is to request the kitchen team to prepare food for meeting, practice, training,
                            etc take place at our parish facility. The kitchen team will prepare the menu as their
                            convenience, and they have the right to deny the request. All food preparation request must
                            be submit to Finance Office at least a week in advance.
                    </td>
                </tr>

                <tr>
                    <td>Purchase Pre Approval Request (<a href="pdf/forms/PurchasePreApprovalRequest.xls"
                                                          style={{"color": "#3e48e2"}}>XLS</a>)
                    </td>
                    <td style={{"color": "#B18904"}}>Mẫu yêu cầu dự chi trên $ 1,000 <br/><br/>
                        Purchase pre-approval expense above $1,000.
                    </td>
                </tr>
                <tr>
                    <td>Registration Form (<a href="pdf/forms/RegistrationForm.pdf" style={{"color": "#3e48e2"}}>PDF</a>)</td>
                    <td style={{"color": "#B18904"}}>Đơn xin gia nhập giáo xứ<br/><br/>
                        New church member registration.
                    </td>
                </tr>
                <tr>
                    <td>Sample Budget (<a href="pdf/forms/SampleBudget.pdf" style={{"color": "#3e48e2"}}>PDF</a>)</td>
                    <td style={{"color": "#B18904"}}>Dự thu - chi tiêu <br/><br/>
                        Detailed budget request form.
                    </td>
                </tr>

                <tr>
                    <td><a href="https://archatl.com/ministries-services/safe-environment/volunteers/"
                           style={{"color": "#3e48e2"}}>Volunteer and Safety Information</a></td>
                    <td style={{"color": "#B18904"}}>Trang web hướng dẫn cho người tình nguyện và an toàn <br/><br/>
                        Link to volunteer and safety requirement.
                    </td>
                </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
}

export default Forms;