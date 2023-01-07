// Jan 6 05:02:07 PM  ==> Cloning from https://github.com/dsofi/portfolio-BackEnd...
// Jan 6 05:02:12 PM  ==> Checking out commit 693427fd5bbbcb7c1d4dc60febdd0e522496ecd5 in branch main
// Jan 6 05:02:28 PM  #1 [internal] load .dockerignore
// Jan 6 05:02:28 PM  #1 transferring context: 2B done
// Jan 6 05:02:28 PM  #1 DONE 0.0s
// Jan 6 05:02:28 PM  
// Jan 6 05:02:28 PM  #2 [internal] load build definition from Dockerfile
// Jan 6 05:02:28 PM  #2 transferring dockerfile: 174B done
// Jan 6 05:02:28 PM  #2 DONE 0.0s
// Jan 6 05:02:28 PM  
// Jan 6 05:02:28 PM  #3 [internal] load metadata for docker.io/library/amazoncorretto:19-alpine-jdk
// Jan 6 05:02:28 PM  #3 ...
// Jan 6 05:02:28 PM  
// Jan 6 05:02:28 PM  #4 [auth] library/amazoncorretto:pull token for registry-1.docker.io
// Jan 6 05:02:28 PM  #4 DONE 0.0s
// Jan 6 05:02:29 PM  
// Jan 6 05:02:29 PM  #3 [internal] load metadata for docker.io/library/amazoncorretto:19-alpine-jdk
// Jan 6 05:02:29 PM  #3 DONE 0.9s
// Jan 6 05:02:29 PM  
// Jan 6 05:02:29 PM  #5 [1/2] FROM docker.io/library/amazoncorretto:19-alpine-jdk@sha256:46be4d85ae0f45ee7144fcb0d785907b960ee273f6e3d759b6e0c39bf03e5387
// Jan 6 05:02:29 PM  #5 resolve docker.io/library/amazoncorretto:19-alpine-jdk@sha256:46be4d85ae0f45ee7144fcb0d785907b960ee273f6e3d759b6e0c39bf03e5387 done
// Jan 6 05:02:30 PM  #5 extracting sha256:ca7dd9ec2225f2385955c43b2379305acd51543c28cf1d4e94522b3d94cce3ce
// Jan 6 05:02:30 PM  #5 extracting sha256:ca7dd9ec2225f2385955c43b2379305acd51543c28cf1d4e94522b3d94cce3ce 0.5s done
// Jan 6 05:02:31 PM  #5 ...
// Jan 6 05:02:31 PM  
// Jan 6 05:02:31 PM  #6 [internal] load build context
// Jan 6 05:02:31 PM  #6 transferring context: 49.25MB 1.8s done
// Jan 6 05:02:31 PM  #6 DONE 1.8s
// Jan 6 05:02:31 PM  
// Jan 6 05:02:31 PM  #5 [1/2] FROM docker.io/library/amazoncorretto:19-alpine-jdk@sha256:46be4d85ae0f45ee7144fcb0d785907b960ee273f6e3d759b6e0c39bf03e5387
// Jan 6 05:02:32 PM  #5 extracting sha256:b953496144a820faf3b5884ddfc542a98cc07f6a24635f26015e7c8d0ef19efe
// Jan 6 05:02:37 PM  #5 extracting sha256:b953496144a820faf3b5884ddfc542a98cc07f6a24635f26015e7c8d0ef19efe 4.6s done
// Jan 6 05:02:37 PM  #5 DONE 7.5s
// Jan 6 05:02:37 PM  
// Jan 6 05:02:37 PM  #7 [2/2] COPY target/segunda-0.0.1-SNAPSHOT.jar app.jar
// Jan 6 05:02:37 PM  #7 DONE 0.2s
// Jan 6 05:02:37 PM  
// Jan 6 05:02:37 PM  #8 exporting to oci image format
// Jan 6 05:02:37 PM  #8 exporting layers
// Jan 6 05:02:39 PM  #8 exporting layers 2.5s done
// Jan 6 05:02:39 PM  #8 exporting manifest sha256:a193e892044193bbebe1675ecf1ef95873043d9ce39dfe1e88117eab223f241f done
// Jan 6 05:02:39 PM  #8 exporting config sha256:adca1d20d19a37794c37b96a7766afb25ca34e76b45a41eaa6c6e9445f5be180 done
// Jan 6 05:02:46 PM  #8 DONE 9.2s
// Jan 6 05:02:46 PM  
// Jan 6 05:02:46 PM  #9 exporting cache
// Jan 6 05:02:52 PM  #9 DONE 5.8s
// Jan 6 05:02:53 PM  Pushing image to registry...
// Jan 6 05:02:58 PM  Upload succeeded
// Jan 6 05:02:58 PM  DONE
// Jan 6 05:03:35 PM  
// Jan 6 05:03:35 PM    .   ____          _            __ _ _
// Jan 6 05:03:35 PM   /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
// Jan 6 05:03:35 PM  ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
// Jan 6 05:03:35 PM   \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
// Jan 6 05:03:35 PM    '  |____| .__|_| |_|_| |_\__, | / / / /
// Jan 6 05:03:35 PM   =========|_|==============|___/=/_/_/_/
// Jan 6 05:03:35 PM   :: Spring Boot ::                (v3.0.0)
// Jan 6 05:03:35 PM  
// Jan 6 05:03:37 PM  2023-01-06T20:03:37.764Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : Starting SegundaApplication v0.0.1-SNAPSHOT using Java 19.0.1 with PID 1 (/app.jar started by root in /)
// Jan 6 05:03:37 PM  2023-01-06T20:03:37.868Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : No active profile set, falling back to 1 default profile: "default"
// Jan 6 05:04:02 PM  2023-01-06T20:04:02.460Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
// Jan 6 05:04:05 PM  2023-01-06T20:04:05.357Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 2500 ms. Found 8 JPA repository interfaces.
// Jan 6 05:04:28 PM  2023-01-06T20:04:28.564Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
// Jan 6 05:04:29 PM  2023-01-06T20:04:29.155Z  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
// Jan 6 05:04:29 PM  2023-01-06T20:04:29.156Z  INFO 1 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.1]
// Jan 6 05:04:33 PM  2023-01-06T20:04:33.265Z  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
// Jan 6 05:04:33 PM  2023-01-06T20:04:33.269Z  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 53901 ms
// Jan 6 05:04:45 PM  2023-01-06T20:04:45.460Z  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
// Jan 6 05:04:47 PM  2023-01-06T20:04:47.660Z  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.1.5.Final

// Jan 6 05:04:52 PM  2023-01-06T20:04:52.559Z  WARN 1 --- [           main] org.hibernate.orm.deprecation            : HHH90000021: Encountered deprecated setting [javax.persistence.sharedCache.mode], use [jakarta.persistence.sharedCache.mode] instead

// Jan 6 05:04:55 PM  2023-01-06T20:04:55.857Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
// Jan 6 05:05:00 PM  2023-01-06T20:05:00.677Z  INFO 1 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@38b972d7
// Jan 6 05:05:00 PM  2023-01-06T20:05:00.687Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
// Jan 6 05:05:01 PM  2023-01-06T20:05:01.759Z  INFO 1 --- [           main] SQL dialect                              : HHH000400: Using dialect: org.hibernate.dialect.MySQLDialect
// Jan 6 05:06:19 PM  2023-01-06T20:06:19.225Z  INFO 1 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
// Jan 6 05:06:19 PM  2023-01-06T20:06:19.256Z  INFO 1 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'

// Jan 6 05:06:47 PM  2023-01-06T20:06:47.060Z  WARN 1 --- [           main] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning

// Jan 6 05:06:57 PM  2023-01-06T20:06:57.869Z  INFO 1 --- [           main] o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with [org.springframework.security.web.session.DisableEncodeUrlFilter@2eb0cefe, org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@5a2ae1ab, org.springframework.security.web.context.SecurityContextHolderFilter@4a2bf50f, org.springframework.security.web.header.HeaderWriterFilter@3f6cce7f, org.springframework.web.filter.CorsFilter@2bec068b, org.springframework.security.web.authentication.logout.LogoutFilter@6b70d1fb, com.probando.segunda.security.JWTAuthorizationFilter@b7838a9, com.probando.segunda.security.JWTAuthenticationFilter@7d59e968, org.springframework.security.web.savedrequest.RequestCacheAwareFilter@2506b881, org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@486bd064, org.springframework.security.web.authentication.AnonymousAuthenticationFilter@55361f03, org.springframework.security.web.session.SessionManagementFilter@7b9088f2, org.springframework.security.web.access.ExceptionTranslationFilter@5e905f2c, org.springframework.security.web.access.intercept.AuthorizationFilter@130cfc47]
// Jan 6 05:06:57 PM  2023-01-06T20:06:57.869Z  INFO 1 --- [           main] o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with [org.springframework.security.web.session.DisableEncodeUrlFilter@2eb0cefe, org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@5a2ae1ab, org.springframework.security.web.context.SecurityContextHolderFilter@4a2bf50f, org.springframework.security.web.header.HeaderWriterFilter@3f6cce7f, org.springframework.web.filter.CorsFilter@2bec068b, org.springframework.security.web.authentication.logout.LogoutFilter@6b70d1fb, com.probando.segunda.security.JWTAuthorizationFilter@b7838a9, com.probando.segunda.security.JWTAuthenticationFilter@7d59e968, org.springframework.security.web.savedrequest.RequestCacheAwareFilter@2506b881, org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@486bd064, org.springframework.security.web.authentication.AnonymousAuthenticationFilter@55361f03, org.springframework.security.web.session.SessionManagementFilter@7b9088f2, org.springframework.security.web.access.ExceptionTranslationFilter@5e905f2c, org.springframework.security.web.access.intercept.AuthorizationFilter@130cfc47]
// Jan 6 05:07:05 PM  2023-01-06T20:07:05.260Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
// Jan 6 05:07:06 PM  2023-01-06T20:07:06.156Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : Started SegundaApplication in 222.103 seconds (process running for 239.152)
// Jan 6 05:08:35 PM  2023-01-06T20:08:35.260Z  INFO 1 --- [ionShutdownHook] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
// Jan 6 05:08:35 PM  2023-01-06T20:08:35.358Z  INFO 1 --- [ionShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
// Jan 6 05:08:37 PM  2023-01-06T20:08:37.325Z  INFO 1 --- [ionShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.