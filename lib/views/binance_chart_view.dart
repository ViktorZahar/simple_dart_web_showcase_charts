import 'dart:convert';

import 'package:simple_dart_web_charts/chart.dart';
import 'package:simple_dart_web_views/view.dart';
import 'package:simple_dart_web_widgets/fields/text_area_field.dart';
import 'package:simple_dart_web_widgets/labels/simple_label.dart';

import '../chart_data/eth_usdt_binance_price.dart';
import '../chart_widget_panel.dart';

class BinanceChartView extends View {
  BinanceChartView() : super('BinanceChartView') {
    fullSize();
    id = 'binance_chart';
    caption = 'Binance Chart';
    fillContent = true;
    padding = '10px';
    vertical = true;
    stride = '5px';
    scrollable = true;
  }

  @override
  void afterShow() {
    clear();
    chartPanel.chartWidget.clear();
    addWithWaiting(chartPanel).then((value) =>
        chartPanel.chartWidget.renderCandleChart(dataFromTextField()));
    addAll([captionLabel, chartDataTextArea]);
    chartDataTextArea.onValueChange.listen((event) {
      try {
        final data = dataFromTextField();
        chartPanel.chartWidget.clear();
        chartPanel.chartWidget.renderCandleChart(data);
      } catch (e) {
        chartPanel.caption = 'Error data format';
        chartPanel.chartWidget.clear();
      }
    });
  }

  List<CandleRow> dataFromTextField() {
    final res = <CandleRow>[];
    final binancePrices = json.decode(chartDataTextArea.value);
    for (final bp in binancePrices) {
      final d = DateTime.fromMillisecondsSinceEpoch(bp[0]);
      final open = double.parse(bp[1]);
      final high = double.parse(bp[2]);
      final low = double.parse(bp[3]);
      final close = double.parse(bp[4]);
      res.add(CandleRow(d, open, high, low, close));
    }
    return res;
  }

  final chartPanel = ChartWidgetPanel()
    ..caption = 'Binance chart'
    ..fullWidth()
    ..height = '300px';

  SimpleLabel captionLabel = SimpleLabel()
    ..wordBreak = true
    ..wrap = true
    ..caption = 'Candle data in Binance API format';

  TextAreaField chartDataTextArea = TextAreaField()
    ..value = ethUsdtBinancePriceJson
    ..fullWidth()
    ..fillContent = true;
}
