import React from "react";
import "../style.css";
import Footer from "../Footer";

function Dashboard() {
  return (
    <div className="bg-slate-50">
      <div className="row align-items-center text-white vh-100 background-section">
        {/* Left Column (Empty) */}
        <div className="col-lg-6 d-none d-lg-block"></div>

        {/* Right Column (Text Content) */}
        <div className="col-lg-6 text-start p-5">
          <h1 className=" display-3 hometype p-3 shadow-lg">
            THE HOME OF<br /> <span className="font-bold">MILITARY</span>
            <br /> MENTAL HEALTH.
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-5">
        <div className="container">
          <div className="row">
            {/* Spacer Column */}
            <div className="col-lg-2"></div>

            {/* Content Column */}
            <div className="col-lg-8 bg-slate-200 p-4 rounded">
              <i className="fas fa-handshake fa-3x text-gray-600"></i>
              <h1 className="mb-3  ivy">Our Mission</h1>
              <p className="">
                The Lemich Clinic for Military Mental Health was founded on the
                belief that everyone who serves should have access to high
                quality, confidential, mental health care. The majority of our
                clients are active duty sailors at Naval Station Norfolk. We
                also see service members from the other military installations
                in Virginia. We also work with military spouses and recent
                veterans. If you are a first responder or outside the military,
                contact us to see if you qualify for our program.
              </p>
            </div>

            {/* Spacer Column */}
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5">
        <div className="container">
          <div className="row text-center">
            {/* Personalized Section */}
            <div className="col-lg-3 bg-slate-100 p-4 rounded">
              <div className="mb-4">
                <i className="fas fa-user-circle fa-3x text-gray-600"></i>
              </div>
              <h2 className="text-xl font-semibold mb-3 ivy">Personalized</h2>
              <p>
                You are matched with a therapist that fits your needs and style.
                We take the time to get to know you to make the right pairing.
                If we cannot make this determination before you arrive, we will
                spend the time with you during an intake to find your match.
              </p>
            </div>

            {/* Varied Section */}
            <div className="col-lg-3 bg-slate-200 p-4 rounded">
              <div className="mb-4">
                <i className="fas fa-layer-group fa-3x text-gray-600"></i>
              </div>
              <h2 className="text-xl font-semibold mb-3 ivy">Varied</h2>
              <p>
                We have a large variety of clinician specialties to take care of
                your needs. A few of these include trauma, suicidal ideations,
                major depression, anxiety, anger, OCD, and perinatal concerns.
              </p>
            </div>

            {/* Specialized Section */}
            <div className="col-lg-3 bg-slate-300 p-4 rounded">
              <div className="mb-4">
                <i className="fas fa-flag fa-3x text-gray-600"></i>
              </div>
              <h2 className="text-xl font-semibold mb-3 ivy">Specialized</h2>
              <p>
                As most of our clients are on active duty, we also specialize in
                military-specific concerns. Some of these struggles include PCS
                issues, relationship strains from work-ups and deployments,
                grief over fallen friends, and civilian transitioning.
              </p>
            </div>

            {/* Prepared Section */}
            <div className="col-lg-3 bg-slate-400 p-4 rounded">
              <div className="mb-4">
                <i className="fas fa-file-alt fa-3x text-gray-600"></i>
              </div>
              <h2 className="text-xl font-semibold mb-3 ivy">Prepared</h2>
              <p>
                Our owner, Dr. Lemich, is well-versed in military and VA
                paperwork. As such, we can assist with LIMDU, Med Board, VA, and
                Security Clearance paperwork if medically necessary.
              </p>
            </div>
          </div>

          {/* New GOT TRICARE Section */}
          <div className="row mt-5 ">
            <div className="col-lg-12 bg-slate-500 text-white p-5 rounded">
              <h2 className="text-2xl  font-bold mb-3 ivy underline">GOT TRICARE?</h2>
              <p className="mb-3">Great, we are in-network.</p>
              <p className="mb-3">
                Active duty, please have your referral made to The Lemich
                Clinic.
              </p>
              <p>
                For dependents and retirees, no referral is needed. Just make an
                appointment, and we will do the rest.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
