import 'package:simple_dart_web_widgets/chart_widget.dart';
import 'package:simple_dart_web_widgets/labels/simple_label.dart';
import 'package:simple_dart_web_widgets/panel.dart';

class ChartWidgetPanel extends PanelComponent {
  ChartWidgetPanel() : super('ChartWidgetPanel') {
    vertical = true;
    stride = '2px';
    chartWidget = ChartWidget()..styleFromTheme = true;
    addAll([headerLabel, chartWidget]);
  }

  late ChartWidget chartWidget;

  SimpleLabel headerLabel = SimpleLabel()..addCssClass('HeaderLabel');

  set caption(String value) {
    headerLabel.caption = value;
  }

  String get caption => headerLabel.caption;
}
