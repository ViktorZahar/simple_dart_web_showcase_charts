import 'package:simple_dart_web_views/view.dart';

import '../chart_data/eth_usdt_binance_price.dart';
import '../chart_data/tesla_token_price.dart';
import '../chart_data/wbtc_token_price.dart';
import '../chart_data/xlm_usdt_binance_price.dart';
import '../chart_data/xrp_usdt_binance_price.dart';
import '../chart_widget_panel.dart';

class LineChartsView extends View {
  LineChartsView() : super('LineChartsView') {
    fullSize();
    id = 'line_charts';
    caption = 'Line Charts';
    fillContent = true;
    padding = '1px';
    vertical = true;
    stride = '1px';
    scrollable = true;
  }

  @override
  void afterShow() {
    clear();
    final teslaTokenPricePanel = ChartWidgetPanel()
      ..caption = 'Tesla token price'
      ..fullWidth()
      ..height = '300px';
    final wbtcPricePanel = ChartWidgetPanel()
      ..caption = 'WBTC price'
      ..fullWidth()
      ..height = '300px';

    final xrpUsdtPricePanel = ChartWidgetPanel()
      ..caption = 'XRP_USDT binance price'
      ..fullWidth()
      ..height = '300px';

    final ethUsdtPricePanel = ChartWidgetPanel()
      ..caption = 'ETH_USDT binance price'
      ..fullWidth()
      ..height = '300px';
    final xlmUsdtPricePanel = ChartWidgetPanel()
      ..caption = 'XLM_USDT binance price'
      ..fullWidth()
      ..height = '300px';
    addWithWaiting(teslaTokenPricePanel).then((value) =>
        teslaTokenPricePanel.chart.renderLineChart(teslaTokenPriceData()));
    addWithWaiting(wbtcPricePanel).then(
        (value) => wbtcPricePanel.chart.renderLineChart(wbtcTokenPriceData()));
    addWithWaiting(xrpUsdtPricePanel).then((value) =>
        xrpUsdtPricePanel.chart.renderLineChart(xrpUsdtBinancePriceData()));
    addWithWaiting(ethUsdtPricePanel).then((value) =>
        ethUsdtPricePanel.chart.renderLineChart(ethUsdtBinancePriceData()));
    addWithWaiting(xlmUsdtPricePanel).then((value) =>
        xlmUsdtPricePanel.chart.renderLineChart(xlmUsdtBinancePriceData()));
  }
}
