/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data() {
  const Disciplina = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Professor = ({ name }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "disciplina", accessor: "disciplina", width: "45%", align: "left" },
      { Header: "professor", accessor: "professor", align: "left" },
      { Header: "level", accessor: "level", align: "center" },
      { Header: "periodo", accessor: "periodo", align: "center" },
    ],

    rows: [
      {
        disciplina: <Disciplina name="Inteligência Artifical" />,
        professor: <Professor name="Herman Martins" />,
        level: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Médio" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        periodo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2024.2
          </MDTypography>
        ),
      },
      {
        disciplina: <Disciplina name="Programação Web II" />,
        professor: <Professor name="Demétrio Mestre" />,
        level: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Fácil" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        periodo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2024.2
          </MDTypography>
        ),
      },
      {
        disciplina: <Disciplina name="Concorrente" />,
        professor: <Professor name="Thiago Emmanuel" />,
        level: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Difícil" color="primary" variant="gradient" size="sm" />
          </MDBox>
        ),
        periodo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2024.2
          </MDTypography>
        ),
      },
      {
        disciplina: <Disciplina name="Álgebra Linear" />,
        professor: <Professor name="José Luis" />,
        level: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Médio" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        periodo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2024.2
          </MDTypography>
        ),
      },
      {
        disciplina: <Disciplina name="Algoritmos Avançados" />,
        professor: <Professor name="Rohit Gheyi" />,
        level: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Difícil" color="primary" variant="gradient" size="sm" />
          </MDBox>
        ),
        periodo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2024.2
          </MDTypography>
        ),
      },
    ],
  };
}
