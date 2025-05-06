# ビルドステージ
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS build
WORKDIR /src
COPY TestRiddle/TestRiddle.csproj TestRiddle/

# 必要なパッケージを復元
RUN dotnet restore TestRiddle/TestRiddle.csproj --verbosity detailed

COPY TestRiddle/ TestRiddle/
WORKDIR /src/TestRiddle
RUN dotnet publish -c Release -o /app/out

# 実行ステージ
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/out .

# ポート指定
EXPOSE 8080

# アプリケーションの起動
ENTRYPOINT ["dotnet", "TestRiddle.dll"]