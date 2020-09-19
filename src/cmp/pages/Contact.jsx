import React from 'react';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import CloseIcon from '@material-ui/icons/Close';

const Contact = () => { 
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="display-3 text-center">CONTACT PAGE</h1>
                    <h3 className="text-center">CONTACT PAGE NOT COMPLETE</h3>
                    <div className="col-md-5">
                       <form action="">
                        <div className="mb-3">
                            <label for="email" className="form-label">E-mail or UserName</label>
                            <input type="email" className="form-control" id="email"  placeholder="E-mail or UserName" required autoComplete="off"/>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password"  placeholder="Password" required />
                        </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message"></textarea>
                            </div>
                            <div className="d-flex justify-content-between">
                                <Button variant="contained" 
                                color="primary">Registration | <DoubleArrowIcon />
                                </Button>
                                <Button variant="contained" 
                                color="secondary">cancel | <CloseIcon />
                                </Button>
                            </div>
                       </form>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <div className="border"></div>
                    </div>
                    <div className="col-md-5">
                       <form action="">
                            <div className="mb-3">
                                <label for="fname" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="fname"  placeholder="First Name" required />
                            </div>
                            <div className="mb-3">
                                <label for="lname" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lname"  placeholder="Last Name" required />
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Phone</label>
                                <input type="phone" className="form-control" id="phone"  placeholder="Phone" required autoComplete="off" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">E-mail</label>
                                <input type="email" className="form-control" id="email"  placeholder="E-mail" required autoComplete="off" />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password"  placeholder="Password" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <Button variant="contained" 
                                color="primary">Registration | <DoubleArrowIcon />
                                </Button>
                                <Button variant="contained" 
                                color="secondary">cancel | <CloseIcon />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Contact;