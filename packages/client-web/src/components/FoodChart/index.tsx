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
  TooltipPayload,
} from 'recharts';
import {
  foodData,
  FOOD_CHART_AXIS_LABEL,
  FOOD_CHART_DATA,
  FoodData,
} from 'src/constants';
import { extractRawData, sumTotalValue, color as COLOR } from '@nature/design';
import {
  Container,
  LegendContainer,
  StyledLegend,
  Title,
  TooltopContainer,
  Ul,
} from './style';
import { TFunction } from 'next-i18next';
import { checkHasT, setChartColor, useDarkModeTheme } from 'src/utils';

const FoodChart: FC<{ t?: TFunction }> = ({ t }) => {
  const [state, setstate] = useState<FoodData[]>([]);
  const { isDarkTheme } = useDarkModeTheme();
  const fillColor = isDarkTheme ? COLOR.white : COLOR.black;
  const xLabel = checkHasT(t, FOOD_CHART_AXIS_LABEL.X);
  const yLabel = checkHasT(t, FOOD_CHART_AXIS_LABEL.Y);

  useEffect(() => {
    const resolvedData = extractRawData(foodData, t);
    const sortedData = resolvedData.sort(
      (a, b) => sumTotalValue(b) - sumTotalValue(a)
    );
    setstate(sortedData);
  }, [foodData, t]);

  return (
    <>
      <Title>
        {checkHasT(t, 'The Carbon Footprint of the Food Supply Chain')}
      </Title>
      <Container>
        <ResponsiveContainer width="100%" height={1400}>
          <BarChart
            data={state}
            layout="vertical"
            margin={{
              right: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis
              type="number"
              domain={[
                (dataMin) => Math.floor(dataMin),
                (dataMax) => Math.ceil(dataMax),
              ]}
              dy={10}
            >
              <Label
                value={xLabel}
                position="bottom"
                style={{ fontStyle: 'italic', fill: fillColor }}
              />
            </XAxis>
            <YAxis
              dataKey={FOOD_CHART_DATA.Food_product}
              type="category"
              tick={{ fontSize: 12 }}
            >
              <Label
                value={yLabel}
                position="left"
                angle={-90}
                style={{ fontStyle: 'italic', fill: fillColor }}
              />
            </YAxis>
            <Tooltip
              content={({
                payload,
                label,
              }: {
                payload: TooltipPayload[];
                label: string;
              }) => {
                return (
                  <TooltopContainer>
                    {label}
                    <LegendContainer>
                      {payload.slice(1).map(({ color, name, value }) => (
                        <StyledLegend
                          key={`item-${name}`}
                          style={{ color }}
                        >{`${checkHasT(t, name)} : ${value}`}</StyledLegend>
                      ))}
                    </LegendContainer>
                  </TooltopContainer>
                );
              }}
            />
            <Legend
              content={({ payload }) => (
                <Ul>
                  {payload
                    ? payload.slice(1).map(({ color, value }) => (
                        <li key={`item-${value}`} style={{ color }}>
                          {checkHasT(t, value)}
                        </li>
                      ))
                    : null}
                </Ul>
              )}
            />
            {Object.values(FOOD_CHART_DATA).map((item) => (
              <Bar
                dataKey={item}
                stackId="bar"
                fill={setChartColor(item)}
                key={item}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </>
  );
};

export default FoodChart;
