import React, { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer
} from 'recharts';
import { foodData, foodChartAxisLabel, foodChartData } from 'src/constants';
import { extractRawData, sumTotalValue } from 'src/utils';
import { Container, Title, Ul } from './style';
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
  } = foodChartData;
  const { t } = useTranslation();
  const resolvedData = extractRawData(foodData, t);
  const sortedData = resolvedData.sort(
    (a, b) => sumTotalValue(b) - sumTotalValue(a)
  );

  const renderLegend = ({ payload }) => (
    <Ul>
      {payload.map(({ color, value }, i) => (
        <li key={`item-${i}`} style={{ color }}>
          {t(value)}
        </li>
      ))}
    </Ul>
  );

  return (
    <>
      <Title>{t('The Carbon Footprint of the Food Supply Chain')}</Title>
      <Container>
        <ResponsiveContainer width="100%" height={1400}>
          <BarChart
            data={sortedData}
            layout="vertical"
            margin={{
              right: 20,
              left: 20
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis type="number" domain={[0, 65]} dy={10}>
              <Label value={foodChartAxisLabel.X} position="top" />
            </XAxis>
            <YAxis
              dataKey={Food_product}
              type="category"
              style={{ fontSize: '12px' }}
              dx={-10}
            >
              <Label value={foodChartAxisLabel.Y} position="left" angle={-90} />
            </YAxis>
            <Tooltip />
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
