import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  bgColor: {
    primary: "#013EBD",
    secondary: "#F8EFD0",
  },
  textColor: {
    header: "#101828",
    body: "#475467",
  },
  fontSize: {
    header1: "56px",
    header2: "48px",
    header3: "38px",
    body1: "20px",
    body2: "18px",
    body3: "16px",
    button: "16px",
    counter: "64px",
  },
  lineHeight: {
    header1: "64px",
    header2: "54px",
    header3: "44px",
    body1: "170%",
    body2: "27px",
    body3: "170%",
    button: "auto",
    counter: "48px",
  },
  letterSpacing: {
    header: "-2%",
    body: "0",
    counter: "-1%",
  },
  fontWeight: {
    header: "bold",
    body: "regular",
    counter: "600",
  },
};

export const Globalstyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
  text-decoration: none;
  border: 0;
  /* overflow-x: hidden; */
}
`;

export const Container = styled.div`
  padding: 0 96px;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const PageContainer = styled.div`
  /* position: relative; */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  gap: ${({ gap }) => (gap ? gap : 0)};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : "normal")};
  border-radius: ${({ br }) => (br ? br : 0)};
  color: ${({ color }) => (color ? color : "transparent")};
  /* align-self: sta; */
  padding: ${({ p }) => (p ? p : 0)};
  padding-top: ${({ pt }) => (pt ? pt : 0)};
  padding-bottom: ${({ pb }) => (pb ? pb : 0)};
  padding-right: ${({ pr }) => (pr ? pr : 0)};
  padding-left: ${({ pl }) => (pl ? pl : 0)};

  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  margin-left: ${({ ml }) => (ml ? ml : 0)};
  margin-right: ${({ mr }) => (mr ? mr : 0)};

  max-width: ${({ width }) => (width ? width : "100%")};
  max-height: ${({ height }) => (height ? height : "100%")};

  @media screen and (max-width: 768px) {
    padding: ${({ mp }) => (mp ? mp : 0)};
    padding-top: ${({ mpt, mp }) => (mpt ? mpt : mp ? mp : 0)};
    padding-bottom: ${({ mpb, mp }) => (mpb ? mpb : mp ? mp : 0)};
    padding-right: ${({ mpr, mp }) => (mpr ? mpr : mp ? mp : 0)};
    padding-left: ${({ mpl, mp }) => (mpl ? mpl : mp ? mp : 0)};

    border-radius: ${({ mbr }) => (mbr ? mbr : 0)};
    gap: ${({ gap }) => (gap ? gap : 0)};

    margin-top: ${({ mmt }) => (mmt ? mmt : 0)};
    margin-bottom: ${({ mmb }) => (mmb ? mmb : 0)};
    margin-left: ${({ mml }) => (mml ? mml : 0)};
    margin-right: ${({ mmr }) => (mmr ? mmr : 0)};
  }
`;

export const FlexBox = styled.div`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : 0)};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  flex-wrap: wrap;
  flex: 1 1 50%;
  padding: ${({ p }) => (p ? p : 0)};
  padding-top: ${({ pt }) => (pt ? pt : 0)};
  padding-bottom: ${({ pb }) => (pb ? pb : 0)};
  padding-right: ${({ pr }) => (pr ? pr : 0)};
  padding-left: ${({ pl }) => (pl ? pl : 0)};

  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  margin-left: ${({ ml }) => (ml ? ml : 0)};
  margin-right: ${({ mr }) => (mr ? mr : 0)};

  @media screen and (max-width: 768px) {
    display: block;
    padding-top: ${({ mpt }) => (mpt ? mpt : 0)};
    padding-bottom: ${({ mpb }) => (mpb ? mpb : 0)};
    padding-right: ${({ mpr }) => (mpr ? mpr : 0)};
    padding-left: ${({ mpl }) => (mpl ? mpl : 0)};

    margin-top: ${({ mmt }) => (mmt ? mmt : 0)};
    margin-bottom: ${({ mmb }) => (mmb ? mmb : 0)};
    margin-left: ${({ mml }) => (mml ? mml : 0)};
    margin-right: ${({ mmr }) => (mmr ? mmr : 0)};
  }
`;

export const Paragraph = styled.p`
  font-weight: ${({ fw }) => (fw ? fw : "400")};
  font-size: ${({ fs }) => (fs ? fs : "20px")};
  line-height: ${({ lh }) => (lh ? lh : "170%")};

  color: ${({ color }) => (color ? color : "#475467")};

  @media screen and (max-width: 768px) {
    font-size: ${({ mfs }) => (mfs ? mfs : "14px")};
    line-height: ${({ mlh }) => (mlh ? mlh : "170%")};
  }
`;

export const Title = styled.h1`
  font-weight: ${({ fw }) => (fw ? fw : "700")};
  font-size: ${({ fs }) => (fs ? fs : "48px")};
  line-height: ${({ lh }) => (lh ? lh : "72px")};
  letter-spacing: -0.02em;
  color: ${({ color }) => (color ? color : "#101828")};

  @media screen and (max-width: 768px) {
    font-weight: ${({ mfw }) => (mfw ? mfw : "600")};
    font-size: ${({ mfs }) => (mfs ? mfs : "24px")};
    line-height: ${({ mlh }) => (mlh ? mlh : "30px")};
  }
`;
