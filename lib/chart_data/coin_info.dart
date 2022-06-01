import 'package:simple_dart_web_charts/utils.dart';

class CoinInfo {
  CoinInfo.fromJson(Map jsonMap) {
    hash = jsonMap['hash'];
    symbol = jsonMap['symbol'];
    decimals = jsonMap['decimals'];
    final priceRaw = jsonMap['price'];
    if (priceRaw != null) {
      price = PriceHistory.fromJson(priceRaw);
    }
  }

  String hash = '';
  String symbol = '';
  int decimals = 0;
  PriceHistory? price;
}

class PriceHistory {
  PriceHistory.fromJson(Map jsonMap) {
    coinGeckoId = jsonMap['coinGeckoId'];
    startDate = jsonMap['startDate'];
    endDate = jsonMap['endDate'];
    final rawPrices = jsonMap['prices'];
    if (rawPrices is Map) {
      for (final rawPriceEnt in rawPrices.entries) {
        final price = double.parse(rawPriceEnt.value.toString());
        prices[rawPriceEnt.key] = price;
      }
    }
  }

  String coinGeckoId = '';
  Map<String, double> prices = <String, double>{};
  String startDate = '';
  String endDate = '';

  double lastPrice() => prices[endDate]!;

  double priceAt(int timestamp) {
    final dateTime = DateTime.fromMillisecondsSinceEpoch(timestamp * 1000);
    final price = prices[formatDate(dateTime)];
    return price ?? lastPrice();
  }

  double calcForTimestamp(int timestamp, String value, int baseTokenDecimals) {
    final price = priceAt(timestamp);
    return BigInt.parse(value) *
        BigInt.from(price) /
        BigInt.from(10).pow(baseTokenDecimals);
  }
}