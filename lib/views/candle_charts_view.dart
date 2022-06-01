import 'package:simple_dart_web_views/view.dart';

import '../chart_data/eth_usdt_binance_price.dart';
import '../chart_data/xlm_usdt_binance_price.dart';
import '../chart_data/xrp_usdt_binance_price.dart';
import '../chart_widget_panel.dart';

class CandleChartsView extends View {
  CandleChartsView() : super('CandleChartsView') {
    fullSize();
    id = 'candle_charts';
    caption = 'Candle Charts';
    fillContent = true;
    padding = '1px';
    vertical = true;
    stride = '1px';
    scrollable = true;
  }

  @override
  void afterShow() {
    clear();

    final xlmUsdtPricePanel = ChartWidgetPanel()
      ..caption = 'XLM_USDT binance price'
      ..fullWidth()
      ..height = '300px';
    final ethUsdtPricePanel = ChartWidgetPanel()
      ..caption = 'ETH_USDT binance price'
      ..fullWidth()
      ..height = '300px';
    final xrpUsdtPricePanel = ChartWidgetPanel()
      ..caption = 'XRP_USDT binance price'
      ..fullWidth()
      ..height = '300px';
    addWithWaiting(xlmUsdtPricePanel).then((value) => xlmUsdtPricePanel.chart
        .renderCandleChart(xlmUsdtBinancePriceCandles()));
    addWithWaiting(ethUsdtPricePanel).then((value) => ethUsdtPricePanel.chart
        .renderCandleChart(ethUsdtBinancePriceCandles()));
    addWithWaiting(xrpUsdtPricePanel).then((value) => xrpUsdtPricePanel.chart
        .renderCandleChart(xrpUsdtBinancePriceCandles()));
  }
}
