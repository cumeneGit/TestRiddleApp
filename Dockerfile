# ビルドステージ
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS build
WORKDIR /app  # アプリケーションの作業ディレクトリを /app に設定

# csproj ファイルをコピー
COPY TestRiddle/TestRiddle.csproj ./

# 必要なパッケージを復元
RUN dotnet restore TestRiddle.csproj --verbosity detailed

# ソースコードをコピー
COPY TestRiddle/ ./

# アプリケーションのビルド
RUN dotnet publish -c Release -o /app/out

# 実行ステージ
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out ./

# ポート指定
EXPOSE 8080

# アプリケーションの起動
ENTRYPOINT ["dotnet", "TestRiddle.dll"]
