import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Outlets() {
  return (
    <div>
      <Header />
      <div className="content-area">
        <section className="page-section">
          <div className="container">
            <section className="page-section breadcrumbs">
              <div className="container">
                <div className="page-header">
                  <p
                    style={{
                      padding: "0 0.8em",
                      fontSize: "24px",
                      color: "#5b8353",
                      fontWeight: "400",
                      fontFamily:
                        "PlayfairDisplay,Georgia,Times New Roman,serif",
                    }}
                  >
                    DG Tea available at all Damro Showrooms
                  </p>
                </div>
              </div>
            </section>

            <div className="tab-content">
              <div className="tab-pane fade active in" id="tab-2">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=10OglIqU7RnVSVIwmTYBFrXzCTXlw3o1e&amp;hl=en"
                      width="100%"
                      height="360px"
                    >
                      <span
                        data-mce-type="bookmark"
                        style={{
                          display: "inline-block",
                          width: "0px",
                          overflow: "hidden",
                          lineHeight: "0",
                        }}
                        className="mce_SELRES_start"
                      ></span>
                    </iframe>
                  </div>
                </div>

                <div className="table-responsive">
                  <table
                    className="table"
                    style={{ marginTop: "20px", backgroundColor: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" colspan="6" style={{ width: "164px" }}>
                          <strong
                            style={{
                              color: "#c10f0f",
                              fontWeight: "bold",
                              lineHeight: "20px",
                              marginTop: "6px",
                              fontSize: "12px",
                            }}
                          >
                            WESTERN PROVINCE
                          </strong>
                        </th>
                      </tr>
                      <tr>
                        <th scope="col" style={{ backgroundColor: "#2c9d0c" }}>
                          <strong
                            style={{
                              paddingLeft: "5px",
                              color: "#fff",
                              fontSize: "12.5px",
                            }}
                          >
                            COLOMBO DISTRICT
                          </strong>
                        </th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Kollupitiya</strong>
                          <br />
                          Marino Mall.
                          <br />
                          No.590,
                          <br />
                          Galle Road,
                          <br />
                          Colombo 3.
                          <br />
                          011-2553838
                          <br />
                          011-2554625
                        </td>
                        <td>
                          <strong>Grandpass</strong>
                          <br />
                          No: 517,
                          <br />
                          Prince Of Wales Avenue,
                          <br />
                          Colombo 14.
                          <br />
                          011-2321291
                        </td>
                        <td>
                          <strong>Nawala</strong>
                          <br />
                          No: 92,
                          <br />
                          Nawala Rd,
                          <br />
                          Nugegoda.
                          <br />
                          011-2822651
                        </td>
                        <td>
                          <strong>Wijerama</strong>
                          <br />
                          No: 576,
                          <br />
                          High Level Rd,
                          <br />
                          Gangodawila.
                          <br />
                          011-2802360
                        </td>
                        <td>
                          <strong>Piliyandala</strong>
                          <br />
                          No: 430/1,
                          <br />
                          Colombo Rd,
                          <br />
                          Piliyandala.
                          <br />
                          011-2619157
                        </td>
                        <td>
                          <strong>Dehiwala</strong>
                          <br />
                          No: 04,
                          <br />
                          Galle Road,
                          <br />
                          Dehiwala.
                          <br />
                          011-2710015
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Battaramulla</strong>
                          <br />
                          No: 115,
                          <br />
                          Kaduwela Rd,
                          <br />
                          Battaramulla.
                          <br />
                          011-2883245
                        </td>
                        <td>
                          <strong>Borella</strong>
                          <br />
                          No: 63,
                          <br />
                          D.S.Senanayake Mw,
                          <br />
                          Borella.
                          <br />
                          011-2683740
                        </td>
                        <td>
                          <strong>Homagama</strong>
                          <br />
                          No: 394/4B,
                          <br />
                          High Level Rd,
                          <br />
                          Makumbura, Pannipitiya.
                          <br />
                          011-2891755
                        </td>
                        <td>
                          <strong>Malabe</strong>
                          <br />
                          No: 821/ A,
                          <br />
                          Thalangama North,
                          <br />
                          Kaduwela Rd,
                          <br />
                          Malabe.
                          <br />
                          011-2742730
                        </td>
                        <td>
                          <strong>Awissawella</strong>
                          <br />
                          No: 184,
                          <br />
                          Colombo Rd,
                          <br />
                          Ukwatte,
                          <br />
                          Awissawella.
                          <br />
                          036-2233943
                        </td>
                        <td>
                          <strong>Hanwella</strong>
                          <br />
                          131/1/C,
                          <br />
                          Pahala Hanwella,
                          <br />
                          Hanwella.
                          <br />
                          036-2254814
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Nugegoda</strong>
                          <br />
                          No: 141,
                          <br />
                          High Level Rd,
                          <br />
                          Nugegoda .<br />
                          0112890901
                        </td>
                        <td>
                          <strong>Boralesgamuwa</strong>
                          <br />
                          No.191,
                          <br />
                          Kesbewa Road,
                          <br />
                          Boralesgamuwa
                          <br />
                          011-2057711
                        </td>
                        <td>
                          <strong>Katubedda</strong>
                          <br />
                          No 350,
                          <br />
                          Galle Road,
                          <br />
                          Katubedda.
                          <br />
                          0112649051
                        </td>
                        <td>
                          <strong>Kaduwela</strong>
                          <br />
                          No 507/A, <br />
                          Avissawella Rd,
                          <br />
                          Kaduwela.
                          <br />
                          011-2538358
                        </td>
                        <td>
                          <strong>Kottawa</strong>
                          <br />
                          No: 264/3,
                          <br />
                          Highlevel Rd,
                          <br />
                          Kottawa.
                          <br />
                          011-2178448
                        </td>
                        <td>
                          <strong>Meepe</strong>
                          <br />
                          No: 138,
                          <br />
                          Highlevel Rd,
                          <br />
                          Galagedara,
                          <br />
                          Padukka.
                          <br />
                          011-2188955
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Athurugiriya</strong>
                          <br />
                          No: 141,No 63,
                          <br />
                          Main Street,
                          <br />
                          Athurugiriya.
                          <br />
                          0112076639
                        </td>
                        <td>
                          <strong>Rajagiriya</strong>
                          <br />
                          No:939/G/2,
                          <br />
                          Sri Jayawardenapura Mawatha,
                          <br />
                          Kotte.
                          <br />
                          011-2077291
                        </td>
                        <td>
                          <strong>Kotikawatta</strong>
                          <br />
                          No 103/1,Awissawella road,
                          <br />
                          Kotikawatta,
                          <br />
                          Mulleriyawa New.
                          <br />
                          011-2075160
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table
                    className="table"
                    style={{ marginTop: "20px", backgroundColor: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ backgroundColor: "#2c9d0c" }}>
                          <strong
                            style={{
                              paddingLeft: "5px",
                              color: "#fff",
                              fontSize: "12px",
                            }}
                          >
                            GAMPAHA DISTRICT
                          </strong>
                        </th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Nittambuwa</strong>
                          <br />
                          No: 361,
                          <br />
                          Kandy Rd,
                          <br />
                          Nittambuwa.
                          <br />
                          033-2285685
                        </td>

                        <td>
                          <strong>Veyangoda</strong>
                          <br />
                          No: 220A,
                          <br />
                          Negombo Rd,
                          <br />
                          Veyangoda.
                          <br />
                          033-2296930
                        </td>

                        <td>
                          <strong>Minuwangoda</strong>
                          <br />
                          No: 179,
                          <br />
                          Galoluwa Junction,
                          <br />
                          Colombo Rd,
                          <br />
                          Minuwangoda.
                          <br />
                          011-2281010
                        </td>

                        <td>
                          <strong>Yakkala</strong>
                          <br />
                          No: 67,
                          <br />
                          Kandy Rd,
                          <br />
                          Yakkala.
                          <br />
                          033-2232469
                        </td>

                        <td>
                          <strong>Gampaha</strong>
                          <br />
                          No: 202,
                          <br />
                          Colombo Rd,
                          <br />
                          Gampaha.
                          <br />
                          033-2231990
                        </td>

                        <td>
                          <strong>Dompe</strong>
                          <br />
                          No: 270/C,
                          <br />
                          Madalanda,
                          <br />
                          Dompe.
                          <br />
                          011-2536677
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Kirillawala</strong>
                          <br />
                          No: 2/2A,
                          <br />
                          Kandy Rd,
                          <br />
                          Kirillawala.
                          <br />
                          011-2969034
                        </td>

                        <td>
                          <strong>Kiribathgoda</strong>
                          <br />
                          No: 255,
                          <br />
                          Kandy Rd,
                          <br />
                          Dalugama, <br />
                          Kelaniya.
                          <br />
                          011-2911199
                        </td>

                        <td>
                          <strong>Katunayake</strong>
                          <br />
                          No: 784, <br />
                          Colombo Rd,
                          <br />
                          Airport Junction,
                          <br />
                          Seeduwa.
                          <br />
                          011-2260078
                        </td>

                        <td>
                          <strong>Ragama</strong>
                          <br />
                          No: 85,
                          <br />
                          Mahabage Rd,
                          <br />
                          Ragama.
                          <br />
                          011-2957537
                        </td>

                        <td>
                          <strong>Wattala</strong>
                          <br />
                          No: 580,
                          <br />
                          Negombo Rd,
                          <br />
                          Mabola, <br />
                          Wattala.
                          <br />
                          011-2949507
                        </td>

                        <td>
                          <strong>Ja Ela</strong>
                          <br />
                          No: 368,
                          <br />
                          Weligampitiya,
                          <br />
                          Ja Ela.
                          <br />
                          011-2232555
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Kochchikade</strong>
                          <br />
                          No: 129,
                          <br />
                          Chilaw Rd,
                          <br />
                          Kochchikade.
                          <br />
                          031-2275035
                        </td>

                        <td>
                          <strong>Kirindiwela</strong>
                          <br />
                          Hanwella Rd,
                          <br />
                          Kirindiwela.
                          <br />
                          033-2269702
                        </td>

                        <td>
                          <strong>Weliweriya</strong>
                          <br />
                          No 203/2,
                          <br />
                          New Kandy Rd,
                          <br />
                          Weliweriya.
                          <br />
                          033-2259677
                        </td>

                        <td>
                          <strong>Ganemulla</strong>
                          <br />
                          No: 14,
                          <br />
                          Main Street,
                          <br />
                          Ganemulla.
                          <br />
                          033-2261133
                        </td>

                        <td>
                          <strong>Mirigama</strong>
                          <br />
                          No: 267/2,
                          <br />
                          Pasyala Rd,
                          <br />
                          Mirigama.
                          <br />
                          033-2274699
                        </td>

                        <td>
                          <strong>Negombo</strong>
                          <br />
                          No: 315,
                          <br />
                          Main Street,
                          <br />
                          Negombo.
                          <br />
                          031-2220230
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Pugoda</strong>
                          <br />
                          Hanwella Rd,
                          <br />
                          Pugoda.
                          <br />
                          011-2405086
                        </td>

                        <td>
                          <strong>Divulapitiya</strong>
                          <br />
                          No: 81,
                          <br />
                          Miniwangoda Rd,
                          <br />
                          Divulapitiya.
                          <br />
                          031-2243433
                        </td>

                        <td>
                          <strong>Kadawatha</strong>
                          <br />
                          No: 325/1,
                          <br />
                          Kandy Rd,
                          <br />
                          Kadawatha.
                          <br />
                          011-2901322
                        </td>

                        <td>
                          <strong>Delgoda</strong>
                          <br />
                          No: 351/B,
                          <br />
                          New Kandy Rd,
                          <br />
                          Delgoda.
                          <br />
                          011-2402400
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table
                    className="table"
                    style={{ marginTop: "20px", backgroundColor: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ backgroundColor: "#2c9d0c" }}>
                          <strong
                            style={{
                              paddingLeft: "5px",
                              color: "#fff",
                              fontSize: "12.5px",
                            }}
                          >
                            KALUTARA DISTRICT
                          </strong>
                        </th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Kalutara</strong>
                          <br />
                          No: 271/A,
                          <br />
                          Galle Rd,
                          <br />
                          Kalutara.
                          <br />
                          034-2237352
                        </td>

                        <td>
                          <strong>Panadura</strong>
                          <br />
                          No: 151,
                          <br />
                          Galle Rd,
                          <br />
                          Walana,
                          <br />
                          Panadura.
                          <br />
                          038-2243014
                        </td>

                        <td>
                          <strong>Bulathsinhala</strong>
                          <br />
                          Athura,
                          <br />
                          Bulathsinhala.
                          <br />
                          034-2282737
                        </td>

                        <td>
                          <strong>Bandaragama</strong>
                          <br />
                          No: 76A,
                          <br />
                          Ratnapura Rd,
                          <br />
                          Bandaragama.
                          <br />
                          038-2289214
                        </td>

                        <td>
                          <strong>Horana</strong>
                          <br />
                          No: 215,
                          <br />
                          Panadura Rd,
                          <br />
                          Horana.
                          <br />
                          034-2265070
                        </td>

                        <td>
                          <strong>Aluthgama</strong>
                          <br />
                          No: 424,
                          <br />
                          Depot Junction,
                          <br />
                          Galle Rd, <br />
                          Aluthgama.
                          <br />
                          034-2270554
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Mathugama</strong>
                          <br />
                          No: 74A,
                          <br />
                          Neboda Rd,
                          <br />
                          Mathugama.
                          <br />
                          034-2248404
                        </td>

                        <td>
                          <strong>Wadduwa</strong>
                          <br />
                          No: 518,
                          <br />
                          Galle Rd,
                          <br />
                          Wadduwa.
                          <br />
                          038-2285820
                        </td>

                        <td>
                          <strong>Baduraliya</strong>
                          <br />
                          No: 54,
                          <br />
                          Rathnapura Rd,
                          <br />
                          Baduraliya.
                          <br />
                          034-2245708
                        </td>

                        <td>
                          <strong>Beruwala</strong>
                          <br />
                          No:213 / B,
                          <br />
                          Galle Rd,
                          <br />
                          Massala,
                          <br />
                          Beruwala.
                          <br />
                          034-2277710
                        </td>

                        <td>
                          <strong>Ingiriya</strong>
                          <br />
                          No: 44/B,
                          <br />
                          Padukka Road,
                          <br />
                          Ingiriya.
                          <br />
                          034-2268393
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table
                    className="table"
                    style={{ marginTop: "20px", backgroundColor: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "164px" }}>
                          <strong
                            style={{
                              color: "#c10f0f",
                              fontWeight: "bold",
                              lineHeight: "20px",
                              marginTop: "6px",
                              fontSize: "12px",
                            }}
                          >
                            NORTH CENTRAL PROVINCE
                          </strong>
                        </th>
                      </tr>
                      <tr>
                        <th scope="col" style={{ backgroundColor: "#2c9d0c" }}>
                          <strong
                            style={{
                              paddingLeft: "5px",
                              color: "#fff",
                              fontSize: "12.5px",
                            }}
                          >
                            ANURADHAPURA DISTRICT
                          </strong>
                        </th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Kekirawa</strong>
                          <br />
                          No: 87, <br />
                          Anuradhapura Rd,
                          <br />
                          Kekirawa.
                          <br />
                          025-2265338
                        </td>

                        <td>
                          <strong>Anuradhapura</strong>
                          <br />
                          No: 488/7A, <br />
                          Maithreepala Senanayake Mw,
                          <br />
                          New Town, <br />
                          Anuradhapura.
                          <br />
                          025-2226026
                        </td>

                        <td>
                          <strong>Nochchiyagama</strong>
                          <br />
                          No: 25, <br />
                          Puttalam Rd,
                          <br />
                          Nochchiyagama.
                          <br />
                          025-2257277
                        </td>

                        <td>
                          <strong>Eppawala</strong>
                          <br />
                          No: 70, <br />
                          Talawa Rd,
                          <br />
                          Eppawala.
                          <br />
                          025-2249910
                        </td>

                        <td>
                          <strong>Thambuththegama</strong>
                          <br />
                          No: 33, <br />
                          Rajina Junction,
                          <br />
                          Thambuththegama.
                          <br />
                          025-2275888
                        </td>

                        <td>
                          <strong>Kahatagasdigiliya</strong>
                          <br />
                          Anuradhapura Road,
                          <br />
                          Kahatagasdigiliya
                          <br />
                          025-2247424
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Medawachchiya</strong>
                          <br />
                          No: 32,
                          <br />
                          Main Street,
                          <br />
                          Medawachchiya
                          <br />
                          025-2245444
                        </td>

                        <td>
                          <strong>Horowpathana</strong>
                          <br />
                          Anuradapura Road,
                          <br />
                          Horowpathana.
                          <br />
                          025-2278500
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table
                    className="table"
                    style={{ marginTop: "20px", backgroundColor: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ backgroundColor: "#2c9d0c" }}>
                          <strong
                            style={{
                              paddingLeft: "5px",
                              color: "#fff",
                              fontSize: "12.5px",
                            }}
                          >
                            POLONNARUWA DISTRICT
                          </strong>
                        </th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Hingurakgoda</strong>
                          <br />
                          No: 01, <br />
                          Airport Rd,
                          <br />
                          Hingurakgoda.
                          <br />
                          027-2245455
                        </td>

                        <td>
                          <strong>Kaduruwela</strong>
                          <br />
                          No: 415/C, <br />
                          Main Street,
                          <br />
                          Kaduruwela.
                          <br />
                          027-2223778
                        </td>

                        <td>
                          <strong>Aralaganwila</strong>
                          <br />
                          52/14,
                          <br />
                          New Town,
                          <br />
                          Aralaganwila.
                          <br />
                          027-2257277
                        </td>

                        <td>
                          <strong>Medirigiriya</strong>
                          <br />
                          Main Street,
                          <br />
                          Medirigiriya.
                          <br />
                          027-2248586
                        </td>

                        <td style={{ color: "#fff" }}>
                          <strong>Medirigiriya</strong>
                          <br />
                          Main Street,
                          <br />
                          Medirigiriya.
                          <br />
                          027-2248586
                        </td>

                        <td style={{ color: "#fff" }}>
                          <strong>Medirigiriya</strong>
                          <br />
                          Main Street,
                          <br />
                          Medirigiriya.
                          <br />
                          027-2248586
                        </td>

                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table
                    className="table"
                    style={{ marginTop: "20px", backgroundColor: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "164px" }}>
                          <strong
                            style={{
                              color: "#c10f0f",
                              fontWeight: "bold",
                              lineHeight: "20px",
                              marginTop: "6px",
                              fontSize: "12px",
                            }}
                          >
                            NORTHERN PROVINCE
                          </strong>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Jaffna</strong>
                          <br />
                          No. 166,
                          <br />
                          Palali Road,
                          <br />
                          Jaffna.
                          <br />
                          021-2224874
                        </td>

                        <td>
                          <strong>Vavuniya</strong>
                          <br />
                          No: 284,
                          <br />
                          Kandy Rd,
                          <br />
                          Vavuniya.
                          <br />
                          024-2221403
                        </td>

                        <td>
                          <strong>Mannar</strong>
                          <br />
                          Grand Bazzar,
                          <br />
                          Mannar.
                          <br />
                          023-2223161
                        </td>

                        <td>
                          <strong>Kilinochchi</strong>
                          <br />
                          254 Mile Post,
                          <br />
                          Kandy Road,
                          <br />
                          Kilinochchi.
                          <br />
                          021-2283148
                        </td>

                        <td style={{ color: "#fff" }}>
                          <strong>Kilinochchi</strong>
                          <br />
                          254 Mile Post,
                          <br />
                          Kandy Road,
                          <br />
                          Kilinochchi.
                          <br />
                          021-2283148
                        </td>

                        <td style={{ color: "#fff" }}>
                          <strong>Kilinochchi</strong>
                          <br />
                          254 Mile Post,
                          <br />
                          Kandy Road,
                          <br />
                          Kilinochchi.
                          <br />
                          021-2283148
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table
                    className="table"
                    style={{ marginTop: "20px", backgroundColor: "#fff" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "164px" }}>
                          <strong
                            style={{
                              color: "#c10f0f",
                              fontWeight: "bold",
                              lineHeight: "20px",
                              marginTop: "6px",
                              fontSize: "12px",
                            }}
                          >
                            EASTERN PROVINCE
                          </strong>
                        </th>
                      </tr>
                      <tr>
                        <th scope="col" style={{ backgroundColor: "#2c9d0c" }}>
                          <strong
                            style={{
                              paddingLeft: "5px",
                              color: "#fff",
                              fontSize: "12.5px",
                            }}
                          >
                            AMPARA DISTRICT
                          </strong>
                        </th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                        <th
                          scope="col"
                          style={{ backgroundColor: "#2c9d0c" }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Ampara</strong>
                          <br />
                          No: C54,
                          <br />
                          D.S.Senanayake Mw,
                          <br />
                          Ampara.
                          <br />
                          063-2224055
                        </td>

                        <td>
                          <strong>Akkaraipattu</strong>
                          <br />
                          No: 195/2, <br />
                          Main Street,
                          <br />
                          Akkaraipattu.
                          <br />
                          067-2279432
                        </td>

                        <td>
                          <strong>Sammanthurai</strong>
                          <br />
                          No: 351/3A, <br />
                          Hijra Junction,
                          <br />
                          Police Rd,
                          <br />
                          Sammanthurai.
                          <br />
                          067-2261398
                        </td>

                        <td>
                          <strong>Kalmunai</strong>
                          <br />
                          No: 190,
                          <br />
                          Batticaloa Rd,
                          <br />
                          Kalmunai.
                          <br />
                          067-2225575
                        </td>

                        <td>
                          <strong>Padiyathalawa</strong>
                          <br />
                          Kandy Road,
                          <br />
                          Padiyathalawa.
                          <br />
                          063-2246099
                        </td>

                        <td>
                          <strong>Uhana</strong>
                          <br />
                          No.200,
                          <br />
                          Kandy Road,
                          <br />
                          Uhana.
                          <br />
                          063-2250233
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Pottuvil</strong>
                          <br />
                          No. 45,
                          <br />
                          Main Street,
                          <br />
                          Pottuvil.
                          <br />
                          063-2051970
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pagination-wrapper" style={{ textAlign: "center" }}>
          <ul className="pagination">
            <li className="disabled">
              <Link to="/outlets/page/1">
                <i className="fa fa-angle-double-left"></i> Previous
              </Link>
            </li>
            <li className="active">
              <Link to="/outlets/page/2">
                1 <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li>
              <Link to="/outlets/page/2">2</Link>
            </li>
            <li>
              <Link to="/outlets/page/2">
                Next <i className="fa fa-angle-double-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
