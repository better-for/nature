import React, { FC, useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  ContentRenderer,
  LegendPayload,
  TooltipPayload
} from 'recharts';
import {
  foodData,
  FOOD_CHART_AXIS_LABEL,
  FOOD_CHART_DATA,
  FoodData
} from 'src/constants';
import { extractRawData, sumTotalValue } from 'src/utils';
import {
  Container,
  LegendContainer,
  StyledLegend,
  Title,
  TooltopContainer,
  Ul
} from './style';
import { useTranslation } from 'I18n';

const FoodChart: FC = () => {
  const {
    Food_product,
    Land_use_change,
    Animal_Feed,
    Farm,
    Processing,
    Transport,
    Packging,
    Retail
  } = FOOD_CHART_DATA;

  const { t } = useTranslation();
  const [state, setstate] = useState<FoodData[]>([]);
  const xLabel = t(FOOD_CHART_AXIS_LABEL.X);
  const yLabel = t(FOOD_CHART_AXIS_LABEL.Y);

  const renderLegend: ContentRenderer<{ payload: LegendPayload[] }> = ({
    payload
  }) => (
    <Ul>
      {payload.map(({ color, value }) => (
        <li key={`item-${value}`} style={{ color }}>
          {t(value)}
        </li>
      ))}
    </Ul>
  );

  const renderTooltip: ContentRenderer<{
    payload: TooltipPayload[];
    label: string;
  }> = ({ payload, label }) => {
    return (
      <TooltopContainer>
        {label}
        <LegendContainer>
          {payload.map(({ color, name, value }) => (
            <StyledLegend key={`item-${name}`} style={{ color }}>{`${t(
              name
            )} : ${value}`}</StyledLegend>
          ))}
        </LegendContainer>
      </TooltopContainer>
    );
  };

  useEffect(() => {
    const resolvedData = extractRawData(foodData, t);
    const sortedData = resolvedData.sort(
      (a, b) => sumTotalValue(b) - sumTotalValue(a)
    );
    setstate(sortedData);
  }, [foodData, t]);

  return (
    <>
      <Title>{t('The Carbon Footprint of the Food Supply Chain')}</Title>
      <Container>
        <ResponsiveContainer width="100%" height={1400}>
          <BarChart
            data={state}
            layout="vertical"
            margin={{
              right: 20,
              left: 20
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis
              type="number"
              domain={[
                dataMin => Math.floor(dataMin),
                dataMax => Math.ceil(dataMax)
              ]}
              dy={10}
            >
              <Label value={xLabel} position="top" />
            </XAxis>
            <YAxis
              dataKey={Food_product}
              type="category"
              tick={{ fontSize: 12 }}
            >
              <Label value={yLabel} position="left" angle={-90} />
            </YAxis>
            <Tooltip content={renderTooltip} />
            <Legend content={renderLegend} />
            <Bar dataKey={Land_use_change} stackId="a" fill="#1864ab" />
            <Bar dataKey={Animal_Feed} stackId="a" fill="#0b7285" />
            <Bar dataKey={Farm} stackId="a" fill="#087f5b" />
            <Bar dataKey={Processing} stackId="a" fill="#2b8a3e" />
            <Bar dataKey={Transport} stackId="a" fill="#5c940d" />
            <Bar dataKey={Packging} stackId="a" fill="#e67700" />
            <Bar dataKey={Retail} stackId="a" fill="#666666" />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </>
  );
};

export default FoodChart;
