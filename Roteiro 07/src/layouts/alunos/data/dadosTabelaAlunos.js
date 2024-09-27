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
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import andre_foto from "assets/images/power_ranger_preto.jpg";
import luana_foto from "assets/images/power_ranger_prata.jpeg";
import bia_foto from "assets/images/power_ranger_amarelo.jpg";

export default function data() {
  const Aluno = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Funcao = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "aluno", accessor: "aluno", width: "45%", align: "left" },
      { Header: "função", accessor: "funcao", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Começou no Projeto", accessor: "comecou_no_projeto", align: "center" },
    ],

    rows: [
      {
        aluno: (
          <Aluno
            image={andre_foto}
            name="Andre Felipe Almeida das Neves"
            email="andre.neves@ccc.ufcg.edu.br"
          />
        ),
        funcao: <Funcao title="Desenvolvedor Front-end" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ativo" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        comecou_no_projeto: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/09/2024
          </MDTypography>
        ),
      },
      {
        aluno: (
          <Aluno
            image={luana_foto}
            name="Luana Bringel Leite"
            email="luana.leite@ccc.ufcg.edu.br"
          />
        ),
        funcao: <Funcao title="Desenvolvedor Front-end" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ativo" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        comecou_no_projeto: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/09/2024
          </MDTypography>
        ),
      },
      {
        aluno: (
          <Aluno
            image={bia_foto}
            name="Anna Beatriz Soares Furtado"
            email="anna.beatriz.furtado@ccc.ufcg.edu.br"
          />
        ),
        funcao: <Funcao title="Desenvolvedor Front-end" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ativo" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        comecou_no_projeto: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/09/2024
          </MDTypography>
        ),
      },
    ],
  };
}
