import 'package:simple_dart_web_views/main_window_with_nav_path_theme.dart';

import 'views/binance_chart_view.dart';
import 'views/candle_charts_view.dart';
import 'views/home_view.dart';
import 'views/line_charts_view.dart';

MainWindowWithNavPathTheme mainWindow = MainWindowWithNavPathTheme();

void start() {
  final homeView = HomeView();
  mainWindow
    ..registerViews([
      homeView,
      LineChartsView(),
      CandleChartsView(),
      BinanceChartView(),
    ])
    ..init(homeView);
}
